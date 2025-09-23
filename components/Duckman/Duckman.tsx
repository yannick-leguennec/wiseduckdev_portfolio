"use client";

import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";
import { motion } from "framer-motion";

/**
 * Duckman – a tiny Pac-Man-like game you can drop into any Next.js (v13+) page.
 *
 * ✅ No assets required (draws with Canvas)
 * ✅ Responsive (scales to its container)
 * ✅ Keyboard + touch controls
 * ✅ Single-file component (export default)
 */

const TILE = 24; // Tile size
const BASE_SPEED = 1.0; // Base speed (pixels per frame at 60 fps)

const clamp = (n: number, min: number, max: number) =>
  Math.max(min, Math.min(max, n));

function tileAt(tx: number, ty: number, map: number[][]) {
  if (ty < 0 || ty >= map.length) return 1;
  if (tx < 0) tx = map[0].length - 1;
  if (tx >= map[0].length) tx = 0;
  return map[ty][tx];
}
function isWall(tx: number, ty: number, map: number[][]) {
  return tileAt(tx, ty, map) === 1;
}
function centerOf(tx: number, ty: number, tileSize: number) {
  return { x: tx * tileSize + tileSize / 2, y: ty * tileSize + tileSize / 2 };
}
function dist(a: { x: number; y: number }, b: { x: number; y: number }) {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  return Math.hypot(dx, dy);
}
function playBeep(freq = 560, duration = 0.07, volume = 0.05) {
  try {
    const ctx = new (window.AudioContext ||
      (window as any).webkitAudioContext)();
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = "square";
    o.frequency.value = freq;
    g.gain.value = volume;
    o.connect(g);
    g.connect(ctx.destination);
    o.start();
    o.stop(ctx.currentTime + duration);
  } catch {}
}

type Vec = { x: number; y: number };
type Enemy = {
  id: number;
  pos: Vec;
  dir: Vec;
  speed: number;
  state: "chase" | "fright" | "eaten";
  scatterCorner: { tx: number; ty: number };
  color: string;
};

const originalMaze = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 3, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 3, 1],
  [1, 2, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 1, 2, 1],
  [1, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 1],
  [1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 1],
  [1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1],
  [1, 2, 2, 1, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 1, 2, 2, 1],
  [1, 1, 2, 1, 2, 1, 1, 1, 2, 1, 2, 1, 2, 1, 1, 1, 2, 1, 1],
  [0, 2, 2, 2, 2, 2, 2, 1, 2, 0, 2, 1, 2, 2, 2, 2, 2, 2, 0],
  [1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 1],
  [1, 2, 2, 1, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 1, 2, 2, 1],
  [1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 1],
  [1, 2, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 1, 2, 1],
  [1, 3, 2, 1, 2, 1, 2, 2, 2, 1, 2, 1, 2, 2, 2, 1, 2, 3, 1],
  [1, 2, 2, 2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 2, 1],
  [1, 2, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 1, 2, 1],
  [1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1],
  [1, 2, 1, 1, 1, 1, 2, 1, 1, 0, 1, 1, 2, 1, 1, 1, 1, 2, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

// === Character Drawing =============================================
function drawDuck(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  dir: { x: number; y: number },
  mouthPhase: number
) {
  const bodyR = TILE * 0.9; // body radius
  const headR = TILE * 0.55; // head radius
  const angle = Math.atan2(dir.y, dir.x) || 0; // movement heading
  const open = 0.2 + mouthPhase * 0.4; // mouth opening (0.2–0.6 rad)

  // --- Body ---
  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.arc(x, y, bodyR, 0, Math.PI * 2);
  ctx.fill();

  // --- Head ---
  const hx = x + Math.cos(angle) * bodyR * 0.8;
  const hy = y + Math.sin(angle) * bodyR * 0.8;
  ctx.beginPath();
  ctx.arc(hx, hy, headR, 0, Math.PI * 2);
  ctx.fill();

  // --- Beak (animated Pac-Man wedge) ---
  ctx.fillStyle = "orange";
  ctx.beginPath();
  ctx.moveTo(hx, hy);
  ctx.arc(hx, hy, headR * 0.9, angle + open, angle - open, true);
  ctx.closePath();
  ctx.fill();

  // --- Tail (little feather spikes) ---
  ctx.fillStyle = "yellow";
  for (let i = -1; i <= 1; i++) {
    ctx.beginPath();
    ctx.moveTo(x - Math.cos(angle) * bodyR, y - Math.sin(angle) * bodyR);
    ctx.lineTo(
      x - Math.cos(angle) * (bodyR + 12),
      y - Math.sin(angle) * (bodyR + 12) + i * 6
    );
    ctx.lineTo(
      x - Math.cos(angle) * (bodyR + 8),
      y - Math.sin(angle) * (bodyR + 8) + i * 3
    );
    ctx.closePath();
    ctx.fill();
  }

  // --- Eye ---
  const ex = hx + Math.cos(angle - Math.PI / 2) * headR * 0.4;
  const ey = hy + Math.sin(angle - Math.PI / 2) * headR * 0.4;
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.arc(ex, ey, headR * 0.25, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "black";
  ctx.beginPath();
  ctx.arc(ex, ey, headR * 0.12, 0, Math.PI * 2);
  ctx.fill();
}

// Pineapple with clipped cross-hatch (no leaking grid)
function drawPineapple(ctx: CanvasRenderingContext2D, e: Enemy) {
  const r = TILE / 2 - 2;
  const rx = r * 0.75,
    ry = r;
  const isFright = e.state === "fright" || e.state === "eaten";
  const bodyColor = isFright ? "blue" : e.color;

  // body
  ctx.beginPath();
  ctx.ellipse(e.pos.x, e.pos.y, rx, ry, 0, 0, Math.PI * 2);
  ctx.fillStyle = bodyColor;
  ctx.fill();

  // hatch INSIDE ellipse only
  ctx.save();
  ctx.beginPath();
  ctx.ellipse(e.pos.x, e.pos.y, rx, ry, 0, 0, Math.PI * 2);
  ctx.clip();

  ctx.strokeStyle = "rgba(139,69,19,0.35)"; // soft brown
  ctx.lineWidth = 1;
  for (let i = -r; i <= r; i += 6) {
    ctx.beginPath();
    ctx.moveTo(e.pos.x - r, e.pos.y + i);
    ctx.lineTo(e.pos.x + r, e.pos.y + i);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(e.pos.x + i, e.pos.y - r);
    ctx.lineTo(e.pos.x + i, e.pos.y + r);
    ctx.stroke();
  }
  ctx.restore();

  // leaves
  ctx.fillStyle = isFright ? "lightblue" : "green";
  for (let i = 0; i < 5; i++) {
    ctx.beginPath();
    ctx.moveTo(e.pos.x, e.pos.y - ry - 4);
    ctx.lineTo(e.pos.x - 6 + i * 3, e.pos.y - ry - 12);
    ctx.lineTo(e.pos.x + 6 - i * 3, e.pos.y - ry - 12);
    ctx.closePath();
    ctx.fill();
  }

  // big eyes
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.arc(e.pos.x - r * 0.35, e.pos.y - 2, r * 0.25, 0, Math.PI * 2);
  ctx.arc(e.pos.x + r * 0.35, e.pos.y - 2, r * 0.25, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = isFright ? "white" : "black";
  ctx.beginPath();
  ctx.arc(e.pos.x - r * 0.35, e.pos.y - 2, r * 0.12, 0, Math.PI * 2);
  ctx.arc(e.pos.x + r * 0.35, e.pos.y - 2, r * 0.12, 0, Math.PI * 2);
  ctx.fill();
}

export default function Duckman({
  className,
  muted = true,
}: {
  className?: string;
  muted?: boolean;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [level, setLevel] = useState(1);
  const [paused, setPaused] = useState(true);
  const [over, setOver] = useState(false);
  const [message, setMessage] = useState("Press Space to Start");
  const [mutedState, setMuted] = useState(muted);
  const [difficulty, setDifficulty] = useState<
    "easy" | "normal" | "hard" | "duckboss"
  >("normal");

  const width = originalMaze[0].length;
  const height = originalMaze.length;
  const [map, setMap] = useState<number[][]>(originalMaze);

  const stateRef = useRef({
    started: false,
    pellets: new Set<string>(),
    powerPellets: new Set<string>(),
    duck: {
      pos: centerOf(1, 1, TILE),
      dir: { x: 1, y: 0 },
      nextDir: { x: 1, y: 0 },
      speed: BASE_SPEED,
      mouth: 0, // 0..1 (animated in update(dt))
      powerTimer: 0,
    },
    enemies: [] as Enemy[],
    frame: 0,
  });

  const config = useMemo(() => {
    let speedMultiplier = 1.0;
    let enemyCount = 3;
    if (difficulty === "normal") {
      speedMultiplier = 1.2;
      enemyCount = 4;
    } else if (difficulty === "hard") {
      speedMultiplier = 1.5;
      enemyCount = 5;
    } else if (difficulty === "duckboss") {
      speedMultiplier = 2.0;
      enemyCount = 6;
    }
    return {
      enemyCount,
      enemySpeed: BASE_SPEED * speedMultiplier,
      duckSpeed: BASE_SPEED * speedMultiplier,
      frightSpeed: BASE_SPEED * 0.8,
      powerDuration: 7 * 60,
    };
  }, [difficulty]);

  const resetPellets = useCallback(() => {
    const pellets = new Set<string>();
    const powerPellets = new Set<string>();
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const t = map[y][x];
        if (t === 2) pellets.add(`${x},${y}`);
        if (t === 3) powerPellets.add(`${x},${y}`);
      }
    }
    stateRef.current.pellets = pellets;
    stateRef.current.powerPellets = powerPellets;
  }, [map, height, width]);

  const spawnEnemies = useCallback(() => {
    const corners = [
      { tx: width - 2, ty: 1 },
      { tx: 1, ty: height - 2 },
      { tx: width - 2, ty: height - 2 },
      { tx: Math.floor(width / 2), ty: Math.floor(height / 2) - 1 },
      { tx: Math.floor(width / 2), ty: Math.floor(height / 2) + 1 },
      { tx: Math.floor(width / 2) - 1, ty: Math.floor(height / 2) },
      { tx: Math.floor(width / 2) + 1, ty: Math.floor(height / 2) },
    ];
    const colors = [
      "#FF0000",
      "#FFB8FF",
      "#00FFFF",
      "#FFB852",
      "#FF00FF",
      "#00FF00",
    ];
    const enemies: Enemy[] = [];
    for (let i = 0; i < config.enemyCount; i++) {
      let c = { ...corners[i % corners.length] };
      while (isWall(c.tx, c.ty, map)) {
        c.tx = 1 + Math.floor(Math.random() * (width - 2));
        c.ty = 1 + Math.floor(Math.random() * (height - 2));
      }
      enemies.push({
        id: i,
        pos: centerOf(c.tx, c.ty, TILE),
        dir: { x: -1, y: 0 },
        speed: config.enemySpeed,
        state: "chase",
        scatterCorner: c,
        color: colors[i % colors.length],
      });
    }
    stateRef.current.enemies = enemies;
  }, [config.enemyCount, config.enemySpeed, width, height, map]);

  const resetDuck = useCallback(() => {
    stateRef.current.duck = {
      pos: centerOf(1, 1, TILE),
      dir: { x: 1, y: 0 },
      nextDir: { x: 1, y: 0 },
      speed: config.duckSpeed,
      mouth: 0,
      powerTimer: 0,
    };
  }, [config.duckSpeed]);

  const resetLevel = useCallback(() => {
    setMap([...originalMaze]);
    resetPellets();
    resetDuck();
    spawnEnemies();
    setMessage(`Level ${level}`);
    setPaused(true);
    stateRef.current.started = false;
  }, [level, resetDuck, resetPellets, spawnEnemies]);

  // --- Input: keyboard ------------------------------------------------
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const key = e.key.toLowerCase();
      const handled =
        e.key === " " ||
        key === "arrowup" ||
        key === "arrowdown" ||
        key === "arrowleft" ||
        key === "arrowright" ||
        key === "w" ||
        key === "a" ||
        key === "s" ||
        key === "d" ||
        key === "r";

      if (handled) e.preventDefault();

      if (e.key === " ") {
        setPaused((p) => !p);
        if (!stateRef.current.started) {
          stateRef.current.started = true;
          setMessage("");
        } else if (message === "Ouch! Press Space to continue") {
          setMessage("");
        }
        return;
      }

      if (key === "r") {
        setScore(0);
        setLives(3);
        setOver(false);
        setPaused(true);
        setMessage("Press Space to Start");
        stateRef.current.started = false;
        setLevel(1);
        setMap([...originalMaze]);
        return;
      }

      if (paused || over) return;

      const d = stateRef.current.duck;
      if (key === "arrowup" || key === "w") d.nextDir = { x: 0, y: -1 };
      if (key === "arrowdown" || key === "s") d.nextDir = { x: 0, y: 1 };
      if (key === "arrowleft" || key === "a") d.nextDir = { x: -1, y: 0 };
      if (key === "arrowright" || key === "d") d.nextDir = { x: 1, y: 0 };
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [paused, over, message]);

  // --- Input: touch ---------------------------------------------------
  const [touchStart, setTouchStart] = useState<Vec | null>(null);
  function handleTouchStart(e: React.TouchEvent) {
    e.preventDefault();
    const t = e.touches[0];
    setTouchStart({ x: t.clientX, y: t.clientY });
  }
  function handleTouchEnd(e: React.TouchEvent) {
    e.preventDefault();
    if (!touchStart || paused || over) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touchStart.x;
    const dy = t.clientY - touchStart.y;
    if (Math.abs(dx) > Math.abs(dy)) {
      stateRef.current.duck.nextDir = dx > 0 ? { x: 1, y: 0 } : { x: -1, y: 0 };
    } else {
      stateRef.current.duck.nextDir = dy > 0 ? { x: 0, y: 1 } : { x: 0, y: -1 };
    }
    setTouchStart(null);
  }

  // --- Helpers --------------------------------------------------------
  function canMove(pos: Vec, dir: Vec, map: number[][], _h: number, w: number) {
    const nx = pos.x + dir.x * TILE * 0.5;
    const ny = pos.y + dir.y * TILE * 0.5;
    const tx = Math.floor(nx / TILE);
    const ty = Math.floor(ny / TILE);
    if (dir.x < 0 && nx < 0) return true;
    if (dir.x > 0 && nx >= w * TILE) return true;
    return !isWall(tx, ty, map);
  }
  function alignToTileCenter(pos: Vec, tileSize: number) {
    const tx = Math.round(pos.x / tileSize - 0.5);
    const ty = Math.round(pos.y / tileSize - 0.5);
    return centerOf(tx, ty, tileSize);
  }
  function pickEnemyDir(
    enemy: Enemy,
    target: Vec,
    map: number[][],
    _h: number,
    _w: number
  ) {
    const center = alignToTileCenter(enemy.pos, TILE);
    const atCenter = dist(center, enemy.pos) < 2;
    if (!atCenter) return enemy.dir;

    const options = [
      { x: 0, y: -1 },
      { x: 0, y: 1 },
      { x: -1, y: 0 },
      { x: 1, y: 0 },
    ].filter((d) => {
      if (enemy.dir && d.x === -enemy.dir.x && d.y === -enemy.dir.y)
        return false;
      const nx = center.x + d.x * TILE;
      const ny = center.y + d.y * TILE;
      const tx = Math.floor(nx / TILE);
      const ty = Math.floor(ny / TILE);
      return !isWall(tx, ty, map);
    });

    if (options.length === 0) return { x: -enemy.dir.x, y: -enemy.dir.y };

    const preferAway = enemy.state === "fright";
    options.sort((a, b) => {
      const pa = { x: center.x + a.x * TILE, y: center.y + a.y * TILE };
      const pb = { x: center.x + b.x * TILE, y: center.y + b.y * TILE };
      const da = dist(pa, target);
      const db = dist(pb, target);
      return preferAway ? db - da : da - db;
    });

    if (Math.random() < 0.2)
      return options[Math.floor(Math.random() * options.length)];
    return options[0];
  }

  // --- Rendering (pure) ----------------------------------------------
  function draw(
    ctx: CanvasRenderingContext2D,
    map: number[][],
    h: number,
    w: number
  ) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // background
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, w * TILE, h * TILE);

    // maze
    ctx.strokeStyle = "#00bfff";
    ctx.lineWidth = 2;
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const px = x * TILE;
        const py = y * TILE;
        if (map[y][x] === 1) {
          if (y > 0 && map[y - 1][x] !== 1) {
            ctx.beginPath();
            ctx.moveTo(px, py);
            ctx.lineTo(px + TILE, py);
            ctx.stroke();
          }
          if (y < h - 1 && map[y + 1][x] !== 1) {
            ctx.beginPath();
            ctx.moveTo(px, py + TILE);
            ctx.lineTo(px + TILE, py + TILE);
            ctx.stroke();
          }
          if (x > 0 && map[y][x - 1] !== 1) {
            ctx.beginPath();
            ctx.moveTo(px, py);
            ctx.lineTo(px, py + TILE);
            ctx.stroke();
          }
          if (x < w - 1 && map[y][x + 1] !== 1) {
            ctx.beginPath();
            ctx.moveTo(px + TILE, py);
            ctx.lineTo(px + TILE, py + TILE);
            ctx.stroke();
          }
        } else if (map[y][x] === 2) {
          if (stateRef.current.pellets.has(`${x},${y}`)) {
            ctx.beginPath();
            ctx.arc(px + TILE / 2, py + TILE / 2, 3, 0, Math.PI * 2);
            ctx.fillStyle = "yellow";
            ctx.fill();
          }
        } else if (map[y][x] === 3) {
          if (stateRef.current.powerPellets.has(`${x},${y}`)) {
            ctx.beginPath();
            ctx.arc(px + TILE / 2, py + TILE / 2, 6, 0, Math.PI * 2);
            ctx.fillStyle = "pink";
            ctx.fill();
          }
        }
      }
    }

    // duck (Pac-Man style; direction-aware)
    const d = stateRef.current.duck;
    drawDuck(ctx, d.pos.x, d.pos.y, d.dir, d.mouth);

    // enemies (pineapples, no leaking grid)
    for (const e of stateRef.current.enemies) {
      drawPineapple(ctx, e);
    }
  }

  // --- Game loop -----------------------------------------------------
  useEffect(() => {
    let raf = 0;
    let last = performance.now();

    function step(now: number) {
      const dt = clamp((now - last) / (1000 / 60), 0, 2); // ~frames at 60fps
      last = now;
      stateRef.current.frame++;

      if (!paused && !over && stateRef.current.started) {
        update(dt);
      }
      const ctx = canvasRef.current?.getContext("2d");
      if (ctx) draw(ctx, map, height, width);
      raf = requestAnimationFrame(step);
    }

    function update(dt: number) {
      const s = stateRef.current;
      const d = s.duck;

      // Turning (only when centered)
      const center = alignToTileCenter(d.pos, TILE);
      const atCenter = dist(center, d.pos) < 3;
      if (
        atCenter &&
        d.nextDir &&
        canMove(center, d.nextDir, map, height, width)
      ) {
        d.dir = d.nextDir;
      }

      // Movement
      const speed = d.speed * dt;
      d.pos.x += d.dir.x * speed;
      d.pos.y += d.dir.y * speed;

      // Mouth animation (moved from draw -> avoids dt reference error)
      d.mouth = (d.mouth + 0.1 * dt) % 1;

      // Wrap tunnels
      if (d.pos.x < -4) d.pos.x = width * TILE - 4;
      if (d.pos.x > width * TILE + 4) d.pos.x = 4;

      // Wall collision
      const tx = Math.floor(d.pos.x / TILE);
      const ty = Math.floor(d.pos.y / TILE);
      if (isWall(tx, ty, map)) {
        d.pos = center;
      }

      // Eat pellets
      const key = `${Math.round(d.pos.x / TILE - 0.5)},${Math.round(
        d.pos.y / TILE - 0.5
      )}`;
      if (s.pellets.has(key)) {
        s.pellets.delete(key);
        setScore((v) => v + 10);
        if (!mutedState) playBeep(800, 0.03);
      }
      if (s.powerPellets.has(key)) {
        s.powerPellets.delete(key);
        d.powerTimer = config.powerDuration;
        for (const e of s.enemies) if (e.state !== "eaten") e.state = "fright";
        setScore((v) => v + 50);
        if (!mutedState) playBeep(300, 0.12);
      }
      if (d.powerTimer > 0) d.powerTimer -= dt;

      // Enemies
      for (let i = stateRef.current.enemies.length - 1; i >= 0; i--) {
        const e = stateRef.current.enemies[i];
        const target =
          e.state === "eaten"
            ? centerOf(e.scatterCorner.tx, e.scatterCorner.ty, TILE)
            : d.pos;

        const dir = pickEnemyDir(e, target, map, height, width);
        e.dir = dir;
        const sp = (e.state === "fright" ? config.frightSpeed : e.speed) * dt;
        e.pos.x += dir.x * sp;
        e.pos.y += dir.y * sp;

        if (e.pos.x < -4) e.pos.x = width * TILE - 4;
        if (e.pos.x > width * TILE + 4) e.pos.x = 4;

        const etx = Math.floor(e.pos.x / TILE);
        const ety = Math.floor(e.pos.y / TILE);
        if (isWall(etx, ety, map)) {
          e.pos = alignToTileCenter(e.pos, TILE);
          e.dir = pickEnemyDir(e, target, map, height, width);
        }

        const touching = dist(e.pos, d.pos) < TILE * 0.6;
        if (touching) {
          if (d.powerTimer > 0 && e.state !== "eaten") {
            stateRef.current.enemies.splice(i, 1);
            setScore((v) => v + 200);
            if (!mutedState) playBeep(200, 0.08);
          } else if (e.state !== "eaten") {
            setLives((L) => {
              const next = L - 1;
              if (next <= 0) {
                setOver(true);
                setMessage("Game Over – Press R to Restart");
              } else {
                resetDuck();
                spawnEnemies();
                setMessage("Ouch! Press Space to continue");
                setPaused(true);
              }
              return next;
            });
          }
        }

        if (e.state === "eaten") {
          const c = centerOf(e.scatterCorner.tx, e.scatterCorner.ty, TILE);
          if (dist(e.pos, c) < 3) e.state = "chase";
        }
      }

      if (d.powerTimer <= 0) {
        for (const e of stateRef.current.enemies)
          if (e.state === "fright") e.state = "chase";
      }

      if (s.pellets.size === 0 && s.powerPellets.size === 0) {
        setLevel((lv) => lv + 1);
        setMessage("Level Clear!");
        setPaused(true);
        resetLevel();
      }
    }

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [
    paused,
    over,
    mutedState,
    config.powerDuration,
    config.frightSpeed,
    resetDuck,
    resetLevel,
    spawnEnemies,
    map,
    height,
    width,
  ]);

  // --- Canvas sizing (stable listener) -------------------------------
  useEffect(() => {
    const canvas = canvasRef.current;
    const resize = () => {
      if (!canvas) return;
      canvas.width = width * TILE;
      canvas.height = height * TILE;
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [width, height]);

  // --- Initial level setup -------------------------------------------
  useEffect(() => {
    resetPellets();
    resetDuck();
    spawnEnemies();
  }, [map, resetPellets, resetDuck, spawnEnemies]);

  const scaleStyle: React.CSSProperties = useMemo(
    () => ({ width: width * TILE, height: height * TILE }),
    [width, height]
  );

  return (
    <div className={"relative " + (className ?? "")}>
      <div className="rounded-lg bg-black/90 border border-cyan-500 p-2 shadow-inner">
        <div className="flex items-center justify-between px-2 pb-2 text-sm">
          <div className="flex items-center gap-3">
            <span className="px-2 py-1 bg-black/50 border border-cyan-500">
              Score: {score}
            </span>
            <span className="px-2 py-1 bg-black/50 border border-cyan-500">
              Lives: {lives}
            </span>
            <span className="px-2 py-1 bg-black/50 border border-cyan-500">
              Level: {level}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <select
              value={difficulty}
              onChange={(e) => {
                setDifficulty(
                  e.target.value as "easy" | "normal" | "hard" | "duckboss"
                );
                resetLevel();
              }}
              className="text-xs px-2 py-1 bg-black/50 border border-cyan-500"
            >
              <option value="easy">Easy</option>
              <option value="normal">Normal</option>
              <option value="hard">Hard</option>
              <option value="duckboss">Duck Boss</option>
            </select>
            <button
              onClick={() => setPaused((p) => !p)}
              className="text-xs px-2 py-1 bg-black/50 hover:bg-black/70 border border-cyan-500"
            >
              {paused ? "Resume" : "Pause"}
            </button>
            <button
              onClick={() => setMuted((m) => !m)}
              className="text-xs px-2 py-1 bg-black/50 hover:bg-black/70 border border-cyan-500"
            >
              {mutedState ? "Unmute" : "Mute"}
            </button>
            <button
              onClick={() => {
                setScore(0);
                setLives(3);
                setOver(false);
                setPaused(true);
                setMessage("Press Space to Start");
                stateRef.current.started = false;
                setLevel(1);
                setMap([...originalMaze]);
              }}
              className="text-xs px-2 py-1 bg-black/50 hover:bg-black/70 border border-cyan-500"
            >
              Restart
            </button>
          </div>
        </div>

        <div
          className="relative mx-auto overflow-hidden rounded border border-cyan-500 shadow-lg"
          style={scaleStyle}
        >
          <canvas
            ref={canvasRef}
            className="block w-full h-auto touch-action-none"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          />

          {message && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute inset-x-6 top-6 text-center text-sm bg-black/80 border border-cyan-500 rounded px-3 py-2"
            >
              {message}
            </motion.div>
          )}

          {over && (
            <div className="absolute inset-0 grid place-items-center bg-black/60">
              <div className="text-center space-y-2">
                <div className="text-3xl">💥 Game Over</div>
                <div className="text-sm opacity-80">
                  Press{" "}
                  <kbd className="px-1 rounded bg-black/70 border border-cyan-500">
                    R
                  </kbd>{" "}
                  to restart
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-3 text-xs text-gray-400">
          <p>
            Controls:{" "}
            <kbd className="px-1 rounded bg-black/70 border border-cyan-500">
              WASD
            </kbd>{" "}
            /{" "}
            <kbd className="px-1 rounded bg-black/70 border border-cyan-500">
              Arrow Keys
            </kbd>{" "}
            · Space to Start/Pause · R to Restart
          </p>
        </div>
      </div>

      <div className="mt-3 text-[11px] text-gray-500">
        <span>Duckman: a tiny Pac-like with a duck vs. pineapples. © You.</span>
      </div>
    </div>
  );
}
