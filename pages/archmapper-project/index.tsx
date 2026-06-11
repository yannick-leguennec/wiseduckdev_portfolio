import { useState, useEffect } from "react";
import { GetStaticProps } from "next";
import React from "react";
import Link from "next/link";
import Head from "next/head";
import Footer from "../../components/v2/Footer/Footer";
import WrappedArchMapper from "../../components/v2/WrappedHeaderComponents/WrappedArchMapper/WrappedArchMapper";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useLoader } from "../../context/LoaderContext";
import { useLanguage } from "../../context/LanguageContext";
import { TranslationsType } from "../../types/TranslationsType";
import classes from "../../styles/projects_pages.module.scss";
import mainPicture from "../../public/images/projectsPictures/archmapper/archmapper_project_ai_automation_main_page_image.webp";

export default function ArchMapperProject() {
  // Custom hook to manage the language changes
  const { activeLanguage } = useLanguage();
  // Custom hook to manage the loading state
  const { loading, setLoading } = useLoader();
  // Site URL
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  // Effect to manage the loading state and turn it off when the content is loaded
  useEffect(() => {
    setLoading(false);
  }, [setLoading]);

  const translations: TranslationsType = {
    pageTitle: {
      EN: "ArchMapper",
      FR: "ArchMapper",
    },
    pageSubtitle: {
      EN: "AI-Powered Reverse-Engineering Pipeline for Software Architecture",
      FR: "Pipeline de rétro-ingénierie alimenté par l'IA pour l'architecture logicielle",
    },
    pageIntroduction1: {
      EN: "In spring 2026, while working on Sophia.ai — my personal R&D project on agentic AI for software development — I needed to truly understand how OpenClaw, one of the most capable open-source agentic-AI ecosystems, was architected. The repos involved were too large to read manually, and I needed a structured big-picture I could feed into an LLM for deeper reasoning. ArchMapper was born from that need: a fully automated, resumable, bottom-up reverse-engineering pipeline that turns any codebase into a clean architectural document, ready for human or LLM analysis.",
      FR: "Au printemps 2026, alors que je travaillais sur Sophia.ai — mon projet de R&D personnel sur l'IA agentique appliquée au développement logiciel — j'avais besoin de comprendre en profondeur comment OpenClaw, l'un des écosystèmes d'IA agentique open source les plus aboutis, était architecturé. Les dépôts impliqués étaient trop volumineux pour être lus manuellement, et il me fallait une vue d'ensemble structurée que je pouvais transmettre à un LLM pour un raisonnement plus poussé. ArchMapper est né de ce besoin : un pipeline de rétro-ingénierie ascendant, entièrement automatisé et reprenable, qui transforme n'importe quel codebase en un document architectural propre, prêt pour une analyse humaine ou par LLM.",
    },
    pageIntroduction2: {
      EN: "What started as a tool to support a personal R&D effort evolved into a universal solution: ArchMapper works on any repository, in any language, regardless of scale — including codebases of more than 10,000 files. It is the first project in which I formalized my engineering methodology into a complete standards-driven framework, marking a turning point in the way I build software in the era of agentic AI.",
      FR: "Ce qui n'était au départ qu'un outil pour soutenir un projet de R&D personnel s'est transformé en une solution universelle : ArchMapper fonctionne sur n'importe quel dépôt, dans n'importe quel langage, quelle que soit la taille — y compris pour des codebases de plus de 10 000 fichiers. C'est le premier projet dans lequel j'ai formalisé l'intégralité de ma méthodologie d'ingénierie en un véritable framework normatif, marquant un tournant dans ma façon de bâtir des logiciels à l'ère de l'IA agentique.",
    },
    projectOverviewTitle: {
      EN: "Project Overview",
      FR: "Aperçu du projet",
    },
    projectOverviewContent1: {
      EN: "ArchMapper is a TypeScript-based, fully automated reverse-engineering pipeline that ingests any source-code repository and produces a complete structured analysis: a per-file description (purpose, exports, imports, key abstractions, design patterns), a per-folder synthesis (module purpose, public API, cross-cutting concerns), and a top-level architectural summary. The output is a single canonical `architecture.json` plus one Markdown spec card per module, designed to be both human-readable and directly consumable by Large Language Models for deeper architectural reasoning.",
      FR: "ArchMapper est un pipeline de rétro-ingénierie entièrement automatisé, écrit en TypeScript, qui ingère n'importe quel dépôt de code source pour produire une analyse structurée complète : une description par fichier (rôle, exports, imports, abstractions clés, design patterns), une synthèse par dossier (objectif du module, API publique, préoccupations transverses) et un résumé architectural global. Le résultat est un fichier canonique `architecture.json` accompagné d'une fiche spec Markdown par module, conçu pour être à la fois lisible par un humain et directement exploitable par un grand modèle de langage pour un raisonnement architectural plus poussé.",
    },
    projectOverviewContent2: {
      EN: "The pipeline is built around a bottom-up wave synthesis: every source file is analyzed first, then leaf folders are synthesized from their child files, then parent folders from their child modules, all the way up to the project root. Each level is built on verified facts from the previous level, never on guesses. This methodology guarantees that the final architectural understanding is grounded in real evidence at every step, not in LLM hallucinations.",
      FR: "Le pipeline repose sur une synthèse par vagues ascendantes : chaque fichier source est analysé en premier, puis les dossiers feuilles sont synthétisés à partir de leurs fichiers enfants, puis les dossiers parents à partir de leurs modules enfants, et ainsi de suite jusqu'à la racine du projet. Chaque niveau s'appuie sur les faits vérifiés du niveau précédent, jamais sur des suppositions. Cette méthodologie garantit que la compréhension architecturale finale est ancrée dans des preuves concrètes à chaque étape, et non dans des hallucinations du LLM.",
    },
    projectOverviewContent3: {
      EN: "ArchMapper is also resumable: a single `progress.json` checkpoint, written atomically after every meaningful step, allows any interrupted run to continue from where it stopped — even on codebases of 10,000+ files. Combined with Anthropic's Message Batches API (50% cost reduction) and prompt caching (~90% reduction on repeated system prompts), it makes large-scale reverse-engineering economically viable for individual developers and small teams.",
      FR: "ArchMapper est également reprenable : un point de contrôle unique `progress.json`, écrit de manière atomique après chaque étape significative, permet à toute exécution interrompue de reprendre exactement là où elle s'était arrêtée — même sur des codebases dépassant les 10 000 fichiers. Combinée à l'API Message Batches d'Anthropic (réduction de 50 % du coût) et au prompt caching (réduction d'environ 90 % sur les prompts système répétés), cette approche rend la rétro-ingénierie à grande échelle économiquement viable pour les développeurs individuels et les petites équipes.",
    },
    projectOverviewContent4: {
      EN: "The output is intentionally LLM-friendly. The `architecture.json` document and the spec cards are not designed merely to be archived — they are designed to be passed back into an LLM as context for follow-up analysis: comparing two architectures, identifying tech debt, suggesting refactors, drafting onboarding documentation, or feeding a coding agent with the precise structural map it needs to act safely on a codebase it has never seen. ArchMapper produces the substrate; the LLM does the reasoning.",
      FR: "Le résultat produit est volontairement pensé pour les LLM. Le document `architecture.json` ainsi que les fiches spec ne sont pas conçus uniquement pour être archivés — ils sont conçus pour être réinjectés dans un LLM comme contexte pour une analyse de suivi : comparer deux architectures, identifier la dette technique, suggérer des refactorisations, rédiger une documentation d'onboarding ou fournir à un agent de code la cartographie structurelle précise dont il a besoin pour agir sereinement sur un codebase qu'il ne connaît pas. ArchMapper produit le substrat ; le LLM se charge du raisonnement.",
    },
    projectOverviewContent5: {
      EN: "Public release: spring 2026, MIT-licensed. ArchMapper has already been used to analyze multiple production-grade open-source ecosystems, including OpenClaw, with results that directly informed architectural decisions on parallel projects.",
      FR: "Mise en open source : printemps 2026, sous licence MIT. ArchMapper a déjà été utilisé pour analyser plusieurs écosystèmes open source de qualité production, notamment OpenClaw, avec des résultats qui ont directement nourri les décisions architecturales de projets parallèles.",
    },
    projectMyRoleTitle: {
      EN: "My Role",
      FR: "Mon rôle",
    },
    projectMyRoleContent1: {
      EN: "ArchMapper is a fully solo project. I owned every layer, from the methodology framework down to the last unit test:",
      FR: "ArchMapper est un projet que j'ai mené 100 % en solo. J'ai assumé chaque couche, du framework méthodologique jusqu'au dernier test unitaire :",
    },
    projectMyRoleContentPoint1: {
      EN: "Product Architect: I defined the mission, the bottom-up wave methodology, the output schema, the resumability contract, and the long-term vision (a complete reverse-engineering toolkit covering both code architecture and UX, with UXMapper as the natural sibling project).",
      FR: "Architecte produit : j'ai défini la mission, la méthodologie de synthèse par vagues ascendantes, le schéma de sortie, le contrat de reprise et la vision long terme (un toolkit complet de rétro-ingénierie couvrant à la fois l'architecture du code et l'UX, avec UXMapper comme projet jumeau naturel).",
    },
    projectMyRoleContentPoint2: {
      EN: "Full-Stack TypeScript Developer: I built the entire pipeline in TypeScript with strict type checking (no `any`, no `as` on unvalidated data), `noUncheckedIndexedAccess` enabled, atomic file writes, and Vitest-based unit and integration tests covering every failure path of the orchestrator.",
      FR: "Développeur full-stack TypeScript : j'ai construit l'ensemble du pipeline en TypeScript avec un typage strict (aucun `any`, aucun `as` sur des données non validées), l'option `noUncheckedIndexedAccess` activée, des écritures de fichiers atomiques, et des tests unitaires et d'intégration sous Vitest couvrant chaque chemin d'erreur de l'orchestrateur.",
    },
    projectMyRoleContentPoint3: {
      EN: "AI Integration Engineer: I orchestrated a two-model pipeline using Claude Sonnet for high-volume per-file analysis and Claude Opus for deeper module synthesis, with structured-output enforcement via Zod schemas, prompt caching, batch submission, and `custom_id`-based result matching to handle thousands of concurrent requests safely.",
      FR: "Ingénieur en intégration IA : j'ai orchestré un pipeline à deux modèles utilisant Claude Sonnet pour l'analyse par fichier à haut volume et Claude Opus pour la synthèse de module plus poussée, avec un enforcement de la sortie structurée via des schémas Zod, du prompt caching, de la soumission par batch et un appariement des résultats par `custom_id` pour gérer en toute sécurité des milliers de requêtes concurrentes.",
    },
    projectMyRoleContentPoint4: {
      EN: "Methodology Designer: I authored a complete operational framework — `CLAUDE.md` plus 16 dedicated standards files (workflow, code quality, TypeScript, environment, pipeline architecture, reverse-engineering methodology, testing, LLM security, supply chain, git, documentation, debugging) — that governs every change made to the project, by humans and AI agents alike.",
      FR: "Concepteur de méthodologie : j'ai rédigé un framework opérationnel complet — `CLAUDE.md` accompagné de 16 fichiers de standards dédiés (workflow, qualité du code, TypeScript, environnement, architecture du pipeline, méthodologie de rétro-ingénierie, tests, sécurité LLM, supply chain, git, documentation, débogage) — qui régit chaque modification apportée au projet, qu'elle vienne d'un humain ou d'un agent IA.",
    },
    projectMyRoleContentPoint5: {
      EN: "Security Engineer: I designed and enforced LLM-specific security controls including prompt injection defence (labelled context blocks, anti-injection system instructions), strict secret hygiene (no API keys or file contents in any log), path-traversal protection on all file reads, and a copyright constraint that prevents the mapping agent from reproducing verbatim source code in its outputs.",
      FR: "Ingénieur sécurité : j'ai conçu et appliqué des contrôles de sécurité spécifiques aux LLM, notamment la défense contre l'injection de prompt (blocs de contexte labellisés, instructions système anti-injection), une hygiène stricte des secrets (aucune clé API ni contenu de fichier dans les logs), la protection contre le path traversal sur toutes les lectures de fichiers, et une contrainte de copyright empêchant l'agent cartographe de reproduire du code source verbatim dans ses sorties.",
    },
    projectMyRoleContent2: {
      EN: "From the methodology that frames the entire build to the smallest implementation choice, every decision was driven by one principle: produce a tool reliable enough to be trusted on production-grade codebases, and disciplined enough to be extended safely by AI agents.",
      FR: "De la méthodologie qui encadre l'ensemble de la construction jusqu'au plus petit choix d'implémentation, chaque décision a été guidée par un principe unique : produire un outil suffisamment fiable pour être utilisé en confiance sur des codebases de qualité production, et suffisamment discipliné pour être étendu sereinement par des agents IA.",
    },
    projectCreativityTitle: {
      EN: "Creativity & Inspiration",
      FR: "Créativité & inspiration",
    },
    projectCreativityContent1: {
      EN: "ArchMapper was not born from a market study or a startup pitch. It was born from a very practical, very personal need: I was building Sophia.ai, my R&D project on agentic AI for software development, and I needed to deeply understand how OpenClaw — one of the most capable agentic-AI ecosystems in the open source world — had been architected. I wanted to know what they did, how they did it, and most importantly, why they made the technical choices they made, so that I could take what was worth keeping and adapt it to my own work.",
      FR: "ArchMapper n'est pas né d'une étude de marché ni d'un pitch de startup. Il est né d'un besoin très concret et très personnel : je travaillais sur Sophia.ai, mon projet de R&D sur l'IA agentique appliquée au développement logiciel, et j'avais besoin de comprendre en profondeur comment OpenClaw — l'un des écosystèmes d'IA agentique open source les plus aboutis — était architecturé. Je voulais savoir ce qu'ils faisaient, comment ils le faisaient et, surtout, pourquoi ils avaient fait ces choix techniques, afin de pouvoir reprendre ce qui méritait de l'être et l'adapter à mon propre travail.",
    },
    projectCreativityContent2: {
      EN: "The challenge: the repositories that compose the OpenClaw ecosystem are massive. Some of them exceed 10,000 files. Reading them by hand was simply not realistic, and feeding them raw into an LLM was both expensive and ineffective — the model would lose context, hallucinate connections, and miss the structural shape entirely. I needed a way to produce a clean, structured big-picture of any codebase, in a format an LLM could actually reason over.",
      FR: "Le défi : les dépôts qui composent l'écosystème OpenClaw sont massifs. Certains dépassent les 10 000 fichiers. Les lire manuellement n'était tout simplement pas réaliste, et les transmettre bruts à un LLM était à la fois coûteux et inefficace — le modèle perdait le contexte, hallucinait des connexions et passait totalement à côté de la structure d'ensemble. J'avais besoin d'une manière de produire une vue d'ensemble propre et structurée de n'importe quel codebase, dans un format qu'un LLM pouvait réellement exploiter.",
    },
    projectCreativityContent3: {
      EN: "From that need, ArchMapper emerged. But I made one decision early on: I did not want to build a one-off tool tailored to OpenClaw. I wanted to build something I could point at any repository, in any language, at any time. Because the truth is, this kind of structural understanding is rarely a one-time need. Every time you join a new codebase, every time you audit an open-source dependency, every time you onboard an AI agent on a project, you face the same problem. So I built the universal solution — and that is exactly what ArchMapper became.",
      FR: "De ce besoin, ArchMapper a émergé. Mais j'ai pris une décision dès le départ : je ne voulais pas construire un outil ponctuel taillé pour OpenClaw. Je voulais construire quelque chose que je pourrais pointer sur n'importe quel dépôt, dans n'importe quel langage, à tout moment. Parce que la vérité, c'est que ce type de compréhension structurelle est rarement un besoin ponctuel. Chaque fois qu'on rejoint un nouveau codebase, chaque fois qu'on audite une dépendance open source, chaque fois qu'on intègre un agent IA sur un projet, on fait face au même problème. J'ai donc construit la solution universelle — et c'est exactement ce qu'ArchMapper est devenu.",
    },
    projectCreativityContent4: {
      EN: "My background as a full-stack developer for over two years, with an early focus on AI integration and automation, gave me a clear mental model of what the implementation needed to look like and what kind of result would actually be useful in practice. ArchMapper is the direct product of that experience: a tool I would have wanted from day one, now available to anyone who needs it.",
      FR: "Mon parcours de développeur full-stack depuis plus de deux ans, avec un focus précoce sur l'intégration IA et l'automatisation, m'a donné un modèle mental clair de ce à quoi l'implémentation devait ressembler et du type de résultat qui serait réellement utile en pratique. ArchMapper est le produit direct de cette expérience : un outil que j'aurais voulu avoir dès le premier jour, désormais disponible à toute personne qui en a besoin.",
    },
    projectProcessTitle: {
      EN: "Process & Strategy",
      FR: "Processus & Stratégie",
    },
    projectProcessContent1: {
      EN: "ArchMapper is the first project in which I rigorously applied the full set of TDD, SOLID, DRY, KISS, and YAGNI methodologies, and the first one for which I authored a complete operational framework before writing a line of pipeline code. The framework lives in `CLAUDE.md` (the project's mandatory read-on-every-session document) and in 16 dedicated standards files under `standards/`, each governing one specific concern: workflow, code quality, TypeScript, environment, pipeline architecture, reverse-engineering methodology, unit testing, integration testing, LLM security, supply chain security, git branches, git commits, documentation, debugging, and analysis output reading.",
      FR: "ArchMapper est le premier projet dans lequel j'ai rigoureusement appliqué l'ensemble des méthodologies TDD, SOLID, DRY, KISS et YAGNI, et le premier pour lequel j'ai rédigé un framework opérationnel complet avant d'écrire la moindre ligne de code du pipeline. Ce framework vit dans `CLAUDE.md` (le document de lecture obligatoire à chaque session) ainsi que dans 16 fichiers de standards dédiés sous `standards/`, chacun encadrant une préoccupation précise : workflow, qualité du code, TypeScript, environnement, architecture du pipeline, méthodologie de rétro-ingénierie, tests unitaires, tests d'intégration, sécurité LLM, sécurité de la supply chain, branches git, commits git, documentation, débogage et lecture de la sortie d'analyse.",
    },
    projectProcessContent2: {
      EN: "Each ticket follows the same disciplined sequence, every single time: read `CLAUDE.md` and load the relevant standards, run the baseline test suite to confirm a green starting point, produce an outcome map (every possible exit path with its log entry designed in advance), write a failing test that captures the exact requirement, implement the minimum code to make it pass, run the type checker, refactor if needed, update every affected document in the same commit, run the LLM security checklist, review the full diff, and only then write the commit (one commit per ticket, prefixed with the issue ID, with a co-author line when an AI assisted).",
      FR: "Chaque ticket suit la même séquence disciplinée, à chaque fois : lire `CLAUDE.md` et charger les standards pertinents, lancer la suite de tests de référence pour confirmer un point de départ vert, produire une cartographie des résultats (chaque chemin de sortie possible avec son entrée de log conçue à l'avance), écrire un test rouge qui capture l'exigence exacte, implémenter le minimum de code pour le faire passer au vert, lancer le vérificateur de types, refactoriser si nécessaire, mettre à jour chaque document affecté dans le même commit, dérouler la checklist de sécurité LLM, relire l'intégralité du diff, et seulement après écrire le commit (un commit par ticket, préfixé par l'identifiant d'issue, avec une ligne de co-auteur lorsqu'une IA a contribué).",
    },
    projectProcessContent3: {
      EN: "This level of methodological rigor is not bureaucratic — it is what makes ArchMapper safely extensible by both humans and AI agents. When an LLM-powered coding assistant operates on the project, it does not need to guess my conventions. It reads `CLAUDE.md`, loads the relevant standard, and works inside an explicit, testable framework. The standards are the consensus that makes human-AI collaboration possible at the level of quality I expect for production-grade software.",
      FR: "Ce niveau de rigueur méthodologique n'a rien de bureaucratique — c'est précisément ce qui rend ArchMapper extensible en toute sécurité, à la fois par des humains et par des agents IA. Lorsqu'un assistant de code propulsé par un LLM intervient sur le projet, il n'a pas à deviner mes conventions. Il lit `CLAUDE.md`, charge le standard pertinent, et travaille à l'intérieur d'un framework explicite et testable. Les standards sont le consensus qui rend possible la collaboration humain-IA au niveau de qualité que j'exige pour du logiciel de qualité production.",
    },
    projectProcessContent4: {
      EN: "On the strategic side, every architectural choice was driven by a small set of non-negotiable principles: arrays not Sets in any persisted JSON structure (because Sets silently serialize to `{}`), atomic writes for the resume checkpoint (tmp file + rename, never partial), bottom-up wave order strictly enforced (a parent module is never synthesized before its children), batch results matched by `custom_id` and never by index (because Anthropic does not guarantee result order), and per-item failure tolerance (one bad file moves to a `failed[]` array; the pipeline never aborts on a single error).",
      FR: "Côté stratégique, chaque choix architectural a été guidé par un petit ensemble de principes non négociables : des tableaux et non des Sets dans toute structure JSON persistée (parce que les Sets sont sérialisés silencieusement en `{}`), des écritures atomiques pour le point de contrôle de reprise (fichier temporaire + rename, jamais partiel), un ordre de vagues ascendantes strictement appliqué (un module parent n'est jamais synthétisé avant ses enfants), des résultats de batch appariés par `custom_id` et jamais par index (parce qu'Anthropic ne garantit pas l'ordre des résultats), et une tolérance aux pannes par élément (un fichier défaillant rejoint un tableau `failed[]` ; le pipeline ne s'interrompt jamais sur une erreur isolée).",
    },
    projectProcessContent5: {
      EN: "The methodology was iterative and pragmatic: ship the smallest piece that fully satisfies one acceptance criterion, validate it on a real codebase (OpenClaw, then Claude Code, then progressively larger targets), capture every learning in a standard or in `CLAUDE.md`, and only then move to the next ticket. By the time ArchMapper had analyzed three real-world ecosystems, the standards had converged into a stable, reusable methodology applicable to any future tool I build.",
      FR: "La méthodologie était itérative et pragmatique : livrer le plus petit incrément qui satisfait pleinement un critère d'acceptation, le valider sur un codebase réel (OpenClaw, puis Claude Code, puis des cibles progressivement plus grandes), capturer chaque apprentissage dans un standard ou dans `CLAUDE.md`, et seulement après passer au ticket suivant. Au moment où ArchMapper avait analysé trois écosystèmes réels, les standards avaient convergé vers une méthodologie stable et réutilisable, applicable à n'importe quel outil que je construirai à l'avenir.",
    },
    projectStackTitle: {
      EN: "Stack and Tooling",
      FR: "Stack & outils",
    },
    projectStackPoint1: {
      EN: "Language: TypeScript 5.7 with strict mode, `noUncheckedIndexedAccess`, and `exactOptionalPropertyTypes` enabled",
      FR: "Langage : TypeScript 5.7 en mode strict, avec `noUncheckedIndexedAccess` et `exactOptionalPropertyTypes` activés",
    },
    projectStackPoint2: {
      EN: "Runtime: Node.js 20+, executed via tsx for direct TypeScript script execution",
      FR: "Runtime : Node.js 20+, exécuté via tsx pour l'exécution directe de scripts TypeScript",
    },
    projectStackPoint3: {
      EN: "AI: Anthropic API with Claude Sonnet (per-file analysis, high volume) and Claude Opus (folder synthesis and final architecture, deeper reasoning)",
      FR: "IA : API Anthropic avec Claude Sonnet (analyse par fichier, fort volume) et Claude Opus (synthèse de dossier et architecture finale, raisonnement plus poussé)",
    },
    projectStackPoint4: {
      EN: "Cost optimization: Anthropic Message Batches API (50% per-request discount) and prompt caching via `cache_control: ephemeral` (~90% reduction on repeated system prompts)",
      FR: "Optimisation des coûts : API Message Batches d'Anthropic (réduction de 50 % par requête) et prompt caching via `cache_control: ephemeral` (réduction d'environ 90 % sur les prompts système répétés)",
    },
    projectStackPoint5: {
      EN: "Validation: Zod for end-to-end runtime schema validation (FileAnalysis, ModuleAnalysis, Architecture) — every LLM response is parsed via `safeParse` before touching any artifact",
      FR: "Validation : Zod pour la validation de schéma à l'exécution de bout en bout (FileAnalysis, ModuleAnalysis, Architecture) — chaque réponse LLM passe par `safeParse` avant de toucher au moindre artefact",
    },
    projectStackPoint6: {
      EN: "Static analysis: dree (file-tree generation) and dependency-cruiser (import/require dependency graph extraction)",
      FR: "Analyse statique : dree (génération d'arborescence de fichiers) et dependency-cruiser (extraction du graphe de dépendances import/require)",
    },
    projectStackPoint7: {
      EN: "Testing: Vitest for unit and integration tests, with mocked Anthropic clients and temporary directories for filesystem isolation",
      FR: "Tests : Vitest pour les tests unitaires et d'intégration, avec des clients Anthropic mockés et des répertoires temporaires pour l'isolation du système de fichiers",
    },
    projectStackPoint8: {
      EN: "Persistence: structured JSON-only artifacts (architecture.json, progress.json) with atomic write semantics (tmp file + rename) for crash safety",
      FR: "Persistance : artefacts exclusivement JSON structurés (architecture.json, progress.json) avec une sémantique d'écriture atomique (fichier temporaire + rename) pour la résilience aux crashs",
    },
    projectStackPoint9: {
      EN: "Observability: structured JSON logger module with five log levels (DEBUG, INFO, WARNING, ERROR, CRITICAL) and a designed-in-advance outcome map for every function",
      FR: "Observabilité : module de logger JSON structuré avec cinq niveaux de log (DEBUG, INFO, WARNING, ERROR, CRITICAL) et une cartographie des résultats conçue en amont pour chaque fonction",
    },
    projectStackPoint10: {
      EN: "Versioning & collaboration: Git, GitHub, ticket-per-commit policy with `AM-NNN` issue prefixes and AI co-author lines",
      FR: "Versioning et collaboration : Git, GitHub, politique d'un commit par ticket avec préfixes d'issue `AM-NNN` et lignes de co-auteur IA",
    },
    projectStackContent1: {
      EN: "TypeScript was chosen for its strict type system, which makes the boundary between unknown LLM output and typed internal data structures explicit. Anthropic's Claude family was selected for its tool-use API (which enforces structured JSON output) and its Message Batches API, which makes large-scale analysis economically viable. Zod was chosen as the validation layer because it produces field-level error details that integrate cleanly with structured logging and per-item failure tracking. Vitest was preferred over Jest for its native TypeScript support, fast execution, and minimal configuration overhead.",
      FR: "TypeScript a été choisi pour son système de types strict, qui rend explicite la frontière entre la sortie inconnue d'un LLM et les structures de données typées internes. La famille Claude d'Anthropic a été retenue pour son API tool-use (qui force la sortie JSON structurée) et son API Message Batches, qui rend l'analyse à grande échelle économiquement viable. Zod a été choisi comme couche de validation parce qu'il produit des détails d'erreur au niveau du champ, qui s'intègrent proprement au logging structuré et au suivi des échecs par élément. Vitest a été préféré à Jest pour son support natif de TypeScript, sa rapidité d'exécution et sa configuration minimale.",
    },
    projectStackContent2: {
      EN: "Cost optimization is a first-class concern. Every Anthropic API call sets `max_tokens` explicitly, every system prompt is wrapped in `cache_control: ephemeral` to enable prompt caching, and large analyses run through the Message Batches API to halve the per-token cost. Combined, these choices make a complete reverse-engineering analysis of a 10,000-file repository affordable on a personal Anthropic account.",
      FR: "L'optimisation des coûts est une préoccupation de premier ordre. Chaque appel à l'API Anthropic définit explicitement `max_tokens`, chaque prompt système est encapsulé dans un `cache_control: ephemeral` pour activer le prompt caching, et les analyses volumineuses passent par l'API Message Batches pour diviser par deux le coût par token. Combinées, ces décisions rendent abordable une analyse complète de rétro-ingénierie d'un dépôt de 10 000 fichiers sur un compte Anthropic personnel.",
    },
    projectDesignTitle: {
      EN: "Design and UX Highlights",
      FR: "UX et points clés de conception",
    },
    projectDesignContent1: {
      EN: "ArchMapper is a CLI pipeline tool — it has no GUI, no web interface, and no streaming dashboard. That choice is deliberate, not a limitation. The tool's primary user is not a human reading a dashboard but an LLM consuming a structured document. The real UX is the shape of the output: a single canonical `architecture.json` engineered to be the cleanest possible substrate for downstream LLM reasoning, plus a folder of Markdown spec cards for human inspection.",
      FR: "ArchMapper est un outil de pipeline en ligne de commande — il n'a pas d'interface graphique, pas d'interface web, pas de tableau de bord en streaming. Ce choix est délibéré, pas une limitation. L'utilisateur principal de l'outil n'est pas un humain qui lit un dashboard, mais un LLM qui consomme un document structuré. La vraie UX, c'est la forme du résultat : un unique `architecture.json` canonique conçu pour être le substrat le plus propre possible pour le raisonnement LLM en aval, accompagné d'un dossier de fiches spec Markdown pour l'inspection humaine.",
    },
    projectDesignContent2: {
      EN: "Every output field is designed for clarity and grounding. The `purpose` of every file is bounded to 2–4 sentences and must be specific enough to distinguish it from any other file in the codebase. The `patterns` field uses a controlled vocabulary of 19 named design patterns (factory, singleton, dependency-injection, middleware, adapter, facade, observer, strategy, builder, repository, validator, pipeline, config-module, barrel-export, type-guard, error-boundary, template-method, command, registry) — no invented synonyms, no woolly adjectives. The `crossCuttingConcerns` field uses a similarly controlled vocabulary at the module level.",
      FR: "Chaque champ de sortie est conçu pour la clarté et l'ancrage factuel. Le `purpose` de chaque fichier est borné à 2–4 phrases et doit être suffisamment spécifique pour le distinguer de tout autre fichier du codebase. Le champ `patterns` utilise un vocabulaire contrôlé de 19 design patterns nommés (factory, singleton, dependency-injection, middleware, adapter, facade, observer, strategy, builder, repository, validator, pipeline, config-module, barrel-export, type-guard, error-boundary, template-method, command, registry) — aucun synonyme inventé, aucun adjectif vague. Le champ `crossCuttingConcerns` utilise un vocabulaire contrôlé similaire au niveau module.",
    },
    projectDesignContent3: {
      EN: "The biggest UX challenge was preventing LLM hallucination at scale. With thousands of analysis calls per run, even a 1% hallucination rate would corrupt the architecture document with phantom imports, invented patterns, or fabricated module relationships. The solution was layered: structured-output enforcement via Anthropic's tool-use API, Zod schema validation as a hard gate before any artifact is written, an explicit anti-injection instruction in every system prompt to neutralize adversarial content embedded in analyzed source files, a copyright constraint that prevents the agent from reproducing verbatim source code, and per-item failure tracking so a single bad analysis is logged and isolated rather than poisoning the whole run.",
      FR: "Le plus grand défi UX était d'éviter les hallucinations LLM à grande échelle. Avec plusieurs milliers d'appels d'analyse par exécution, même un taux d'hallucination de 1 % suffirait à corrompre le document architectural avec des imports fantômes, des patterns inventés ou des relations de modules fabriquées. La solution a été stratifiée : enforcement de la sortie structurée via l'API tool-use d'Anthropic, validation de schéma Zod comme barrière dure avant l'écriture du moindre artefact, instruction anti-injection explicite dans chaque prompt système pour neutraliser le contenu adversarial intégré aux fichiers sources analysés, contrainte de copyright empêchant l'agent de reproduire du code source verbatim, et suivi des échecs par élément pour qu'une analyse défaillante soit isolée et tracée plutôt que de contaminer toute l'exécution.",
    },
    projectDesignContent4: {
      EN: "Discoverability and trust are reinforced by the spec cards: one Markdown file per module, in a stable format (Purpose / Public API / Design Patterns / Cross-Cutting Concerns / Children / Notes), so any human reader — and any LLM downstream consumer — knows exactly where to look for what. The result is a tool that produces output a developer can trust, share, version-control, and feed back into another agent without manual cleanup.",
      FR: "La découvrabilité et la confiance sont renforcées par les fiches spec : un fichier Markdown par module, dans un format stable (Purpose / Public API / Design Patterns / Cross-Cutting Concerns / Children / Notes), de sorte que tout lecteur humain — et tout consommateur LLM en aval — sait exactement où chercher quoi. Le résultat est un outil qui produit une sortie qu'un développeur peut utiliser en confiance, partager, versionner et réinjecter dans un autre agent sans nettoyage manuel.",
    },
    projectDeploymentTitle: {
      EN: "Deployment & Scalability",
      FR: "Déploiement & Scalabilité",
    },
    projectDeploymentContent1: {
      EN: "ArchMapper is distributed as a self-contained CLI: clone the repo, install dependencies with `npm install`, configure `.env` with an Anthropic API key and a project name, drop the codebase to analyze under `project/`, and run `npm run analyze`. There is no cloud component, no managed service, no billable infrastructure beyond the user's own Anthropic API usage. This is deliberate: the tool runs locally, on the user's machine, with their credentials, against codebases they control.",
      FR: "ArchMapper est distribué comme un CLI autonome : cloner le dépôt, installer les dépendances avec `npm install`, configurer le `.env` avec une clé API Anthropic et un nom de projet, déposer le codebase à analyser sous `project/`, et lancer `npm run analyze`. Il n'y a aucun composant cloud, aucun service managé, aucune infrastructure facturable au-delà de la consommation Anthropic de l'utilisateur. C'est volontaire : l'outil tourne localement, sur la machine de l'utilisateur, avec ses identifiants, sur des codebases qu'il maîtrise.",
    },
    projectDeploymentContent2: {
      EN: "Scalability is handled through three mechanisms. First, full resumability: the atomic `progress.json` checkpoint allows any interrupted run — whether by a crash, a network timeout, or a manual stop — to continue from the last successful step, without recomputing anything. Second, per-item failure tolerance: a single Zod parse failure or a single Anthropic API error moves that file to a `failed[]` list and the pipeline continues. Third, batching: when `USE_BATCHES=true`, the pipeline submits requests through the Message Batches API in groups of up to 10,000, polls with exponential backoff, and matches results back by stable `custom_id` (the relative file path) to handle very large repositories economically.",
      FR: "La scalabilité repose sur trois mécanismes. Premièrement, une reprise complète : le point de contrôle atomique `progress.json` permet à toute exécution interrompue — qu'il s'agisse d'un crash, d'un timeout réseau ou d'un arrêt manuel — de reprendre à la dernière étape réussie, sans rien recalculer. Deuxièmement, une tolérance aux pannes par élément : un échec de parsing Zod isolé ou une erreur API Anthropic isolée déplace le fichier concerné dans une liste `failed[]` et le pipeline continue. Troisièmement, le batching : lorsque `USE_BATCHES=true`, le pipeline soumet les requêtes via l'API Message Batches par groupes pouvant aller jusqu'à 10 000, sonde avec un backoff exponentiel et apparie les résultats par `custom_id` stable (le chemin relatif du fichier) pour traiter économiquement de très gros dépôts.",
    },
    projectDeploymentContent3: {
      EN: "ArchMapper has been validated against repositories of more than 10,000 files. The hard limit is not the tool itself but the user's Anthropic rate limits and budget, both of which can be tuned via batch mode and prompt caching. Because all output is plain JSON and Markdown, there is no proprietary format and no lock-in: the analysis can be diffed, versioned, archived, or transformed into any downstream representation the user needs.",
      FR: "ArchMapper a été validé sur des dépôts dépassant les 10 000 fichiers. La limite réelle n'est pas l'outil lui-même mais les rate limits et le budget Anthropic de l'utilisateur, qui peuvent tous deux être ajustés via le mode batch et le prompt caching. Comme l'ensemble de la sortie est en JSON et Markdown, il n'y a aucun format propriétaire et aucun verrouillage : l'analyse peut être diffée, versionnée, archivée ou transformée vers n'importe quelle représentation aval dont l'utilisateur a besoin.",
    },
    projectDeploymentContent4: {
      EN: "In short, the pipeline is local-first, resumable by design, and built to run unattended on production-scale codebases.",
      FR: "En résumé, le pipeline est local-first, reprenable par conception, et conçu pour tourner sans surveillance sur des codebases à l'échelle de la production.",
    },
    projectRoadmapTitle: {
      EN: "Roadmap & Vision",
      FR: "Feuille de route & Vision",
    },
    projectRoadmapPoint1: {
      EN: "V0.1 (current): Public release with the full TypeScript pipeline, complete standards framework, sync and batch modes, atomic resumability, and validated runs against multiple production-grade open-source repositories.",
      FR: "V0.1 (actuelle) : mise en open source avec le pipeline TypeScript complet, le framework de standards intégral, les modes sync et batch, la reprise atomique et des exécutions validées sur plusieurs dépôts open source de qualité production.",
    },
    projectRoadmapPoint2: {
      EN: "V0.2: Optional second-pass analysis layer — a follow-up agent that consumes the architecture.json and produces actionable architectural recommendations (tech debt hotspots, decomposition candidates, redundant modules), reusing the same standards-driven workflow.",
      FR: "V0.2 : couche d'analyse optionnelle de second passage — un agent de suivi qui consomme l'architecture.json et produit des recommandations architecturales actionnables (points chauds de dette technique, candidats à la décomposition, modules redondants), en réutilisant le même workflow normatif.",
    },
    projectRoadmapPoint3: {
      EN: "V0.3: Cross-repository comparison mode — given two `architecture.json` files, produce a structured diff (added/removed modules, drifted public APIs, evolving cross-cutting concerns) for monitoring architectural change over time.",
      FR: "V0.3 : mode de comparaison inter-dépôts — étant donné deux fichiers `architecture.json`, produire un diff structuré (modules ajoutés/supprimés, API publiques qui ont dérivé, préoccupations transverses en évolution) pour suivre l'évolution architecturale dans le temps.",
    },
    projectRoadmapPoint4: {
      EN: "Sibling project: UXMapper, a runtime UX/journey analysis pipeline applying the same disciplined methodology to live web applications. Together, ArchMapper and UXMapper form a complete reverse-engineering toolkit covering both code architecture and user experience.",
      FR: "Projet jumeau : UXMapper, un pipeline d'analyse runtime de l'UX et des parcours utilisateur appliquant la même méthodologie disciplinée à des applications web en production. Ensemble, ArchMapper et UXMapper forment un toolkit complet de rétro-ingénierie couvrant à la fois l'architecture du code et l'expérience utilisateur.",
    },
    projectRoadmapPoint5: {
      EN: "Long-term: integration into agentic-AI development workflows — providing autonomous coding agents with the structured architectural context they need to operate safely on unfamiliar codebases. This loops directly back to the original need that sparked ArchMapper: enabling Sophia.ai and other agentic-AI systems to reason about real-world software at production scale.",
      FR: "Long terme : intégration dans les workflows de développement agentique — fournir aux agents de code autonomes le contexte architectural structuré dont ils ont besoin pour opérer sereinement sur des codebases qu'ils ne connaissent pas. Cette vision boucle directement avec le besoin originel qui a déclenché ArchMapper : permettre à Sophia.ai et à d'autres systèmes d'IA agentique de raisonner sur du logiciel réel à l'échelle de la production.",
    },
    projectRoadmapContent1: {
      EN: "ArchMapper is MIT-licensed: anyone — developer, researcher, agent — is free to use, fork, and extend it. Contributions are welcome and follow the same standards-driven workflow as the core project.",
      FR: "ArchMapper est sous licence MIT : toute personne — développeur, chercheur, agent — est libre de l'utiliser, le forker et l'étendre. Les contributions sont bienvenues et suivent le même workflow normatif que le projet principal.",
    },
    projectResultsTitle: {
      EN: "Outcomes",
      FR: "Résultats",
    },
    projectResultsContent1: {
      EN: "ArchMapper is not a customer-facing SaaS — it is an engineering tool, evaluated on the quality of the analyses it produces and on its impact on parallel projects. By that measure, the outcomes have been clear and significant.",
      FR: "ArchMapper n'est pas un SaaS orienté client — c'est un outil d'ingénierie, évalué à la qualité des analyses qu'il produit et à son impact sur les projets parallèles. À cette aune, les résultats ont été clairs et significatifs.",
    },
    projectResultsContent2: {
      EN: "ArchMapper has been used to analyze multiple production-grade open-source ecosystems, including OpenClaw and Claude Code — some of which exceed 10,000 source files. The resulting `architecture.json` documents have been used directly as context in LLM conversations, and the format proved exactly as effective as designed: the model parses the document without hesitation, answers architectural questions with grounded specificity, and surfaces non-obvious connections between modules. That alone is a strong validation of the bottom-up wave methodology and of the schema design.",
      FR: "ArchMapper a été utilisé pour analyser plusieurs écosystèmes open source de qualité production, notamment OpenClaw et Claude Code — dont certains dépassent les 10 000 fichiers sources. Les documents `architecture.json` produits ont été utilisés directement comme contexte dans des conversations LLM, et le format s'est révélé exactement aussi efficace que prévu : le modèle parse le document sans hésitation, répond aux questions architecturales avec une spécificité ancrée et fait remonter des connexions non évidentes entre modules. À elle seule, cette observation valide solidement la méthodologie de synthèse par vagues ascendantes et la conception du schéma.",
    },
    projectResultsContent3: {
      EN: "On a more personal level, the analyses produced by ArchMapper have already informed the architecture of parallel projects (notably Sophia.ai), helped me discover technical choices and patterns I had not encountered before, and accelerated my understanding of complex agentic-AI ecosystems by an order of magnitude. The tool also reinforced my expertise in AI integration, automation, prompt engineering, and large-scale structured-output workflows — capabilities that compound directly into every future project.",
      FR: "Sur un plan plus personnel, les analyses produites par ArchMapper ont déjà nourri l'architecture de projets parallèles (notamment Sophia.ai), m'ont aidé à découvrir des choix techniques et des patterns que je n'avais jamais rencontrés, et ont accéléré ma compréhension d'écosystèmes d'IA agentique complexes d'un ordre de grandeur. L'outil a également renforcé mon expertise en intégration IA, automatisation, prompt engineering et workflows de sortie structurée à grande échelle — des compétences qui composent directement avec chaque projet futur.",
    },
    projectResultsContent4: {
      EN: "Public feedback is still pending — the tool was open-sourced very recently. But the internal results were strong enough that ArchMapper's methodology is now the template for every new project I start, and is the direct progenitor of UXMapper, its sibling tool focused on runtime UX analysis.",
      FR: "Les retours publics sont encore en attente — l'outil vient juste d'être passé en open source. Mais les résultats internes ont été suffisamment forts pour que la méthodologie d'ArchMapper soit désormais la matrice de chaque nouveau projet que je lance, et qu'elle soit le parent direct d'UXMapper, son projet jumeau dédié à l'analyse runtime de l'UX.",
    },
    projectConclusionTitle: {
      EN: "What I Took Away",
      FR: "Ce que j'en ai retiré",
    },
    projectConclusionContent1: {
      EN: "ArchMapper taught me, more than any project before it, how to set up a modern repository on which agentic AI is going to work alongside me. Today, removing AI from a developer's workflow is no longer a realistic option. The work itself is shifting: from monitoring what AI is producing to genuinely collaborating with it. And like any real collaboration, that requires consensus — explicit standards, an agreed methodology, a clearly defined workflow, and a framework the agent can rely on rather than improvise around. ArchMapper is the first project where I built that consensus from the ground up, and the difference in productivity, accuracy, and reliability was immediate and undeniable.",
      FR: "ArchMapper m'a enseigné, plus que tout projet auparavant, comment monter un dépôt moderne sur lequel une IA agentique va venir travailler à mes côtés. Aujourd'hui, retirer l'IA du workflow d'un développeur n'est plus une option réaliste. Le travail lui-même se déplace : on passe du contrôle de ce que produit l'IA à une véritable collaboration avec elle. Et comme toute vraie collaboration, cela exige un consensus — des standards explicites, une méthodologie acceptée, un workflow clairement défini et un framework sur lequel l'agent peut s'appuyer plutôt que d'improviser. ArchMapper est le premier projet où j'ai construit ce consensus de zéro, et la différence en productivité, en précision et en fiabilité a été immédiate et indéniable.",
    },
    projectConclusionContent2: {
      EN: "Beyond the methodology, ArchMapper marked the first project in which I rigorously applied the full TDD, SOLID, DRY, KISS, and YAGNI principles, end-to-end. Once the project was clearly defined, once the standards were locked in, the rest became disciplined homework: design the right architecture, build it the right way, integrate carefully, ship one ticket at a time. The results spoke for themselves. My code became measurably more accurate, more maintainable, and more resilient. My work ethic was propelled to a new level. And the projects I have started since have all benefited from this discipline — both in their code and in how they collaborate with AI.",
      FR: "Au-delà de la méthodologie, ArchMapper a été le premier projet dans lequel j'ai rigoureusement appliqué les principes TDD, SOLID, DRY, KISS et YAGNI, de bout en bout. Une fois le projet clairement défini, une fois les standards verrouillés, le reste devenait un travail discipliné : concevoir la bonne architecture, la construire de la bonne manière, intégrer avec soin, livrer un ticket à la fois. Les résultats ont parlé d'eux-mêmes. Mon code est devenu mesurablement plus précis, plus maintenable et plus résilient. Mon éthique de travail a été propulsée à un nouveau niveau. Et les projets que j'ai lancés depuis bénéficient tous de cette discipline — tant dans leur code que dans leur manière de collaborer avec l'IA.",
    },
    projectConclusionContent3: {
      EN: "On the technical side, I learned an enormous amount about reverse engineering at scale: how to design an analysis schema that grounds the LLM in verifiable facts, how to choose the right format for results so they remain useful both immediately and as substrate for further LLM reasoning, and how to build a pipeline that survives interruptions, errors, and adversarial input without compromising integrity. I also deepened my mastery of advanced Anthropic API features — Message Batches for cost-efficient large-scale runs and prompt caching for repeated context — which I now consider standard tooling for any AI-integration work I do.",
      FR: "Sur le plan technique, j'ai énormément appris sur la rétro-ingénierie à grande échelle : comment concevoir un schéma d'analyse qui ancre le LLM dans des faits vérifiables, comment choisir le bon format pour des résultats qui restent utiles à la fois immédiatement et comme substrat pour un raisonnement LLM ultérieur, et comment bâtir un pipeline qui survit aux interruptions, aux erreurs et aux entrées adversariales sans compromettre son intégrité. J'ai également approfondi ma maîtrise des fonctionnalités avancées de l'API Anthropic — Message Batches pour des exécutions à grande échelle économiques et prompt caching pour les contextes répétés — que je considère désormais comme l'outillage standard de tout travail d'intégration IA que je mène.",
    },
    projectConclusionContent4: {
      EN: "Strategically, this project clarified my conviction that the most valuable engineering tools today are not those that hide complexity but those that surface it cleanly. ArchMapper does not solve software complexity — it makes complexity legible to humans and to LLMs alike. That is the kind of leverage I want to keep building.",
      FR: "Stratégiquement, ce projet a clarifié ma conviction que les outils d'ingénierie les plus précieux aujourd'hui ne sont pas ceux qui cachent la complexité, mais ceux qui la rendent lisible avec netteté. ArchMapper ne résout pas la complexité logicielle — il la rend lisible, à la fois pour les humains et pour les LLM. C'est ce type de levier que je veux continuer à construire.",
    },
    projectConclusionContent5: {
      EN: "Finally, ArchMapper reinforced something I now consider foundational: by being able to reverse-engineer successful open-source projects quickly and professionally, we give ourselves the means to improve on them, to build better products, and ultimately to ship a brighter future. The faster we can understand great work, the faster we can stand on its shoulders. That is the philosophy that ties every Wise Duck Dev project together — useful, innovative tools that compound on themselves and amplify what humans and AI can build, side by side.",
      FR: "Enfin, ArchMapper a renforcé une conviction désormais fondamentale chez moi : en étant capable de rétro-ingénierer rapidement et professionnellement les projets open source qui réussissent, nous nous donnons les moyens de les améliorer, de bâtir de meilleurs produits et, in fine, de livrer un avenir plus radieux. Plus vite nous comprenons un travail remarquable, plus vite nous pouvons nous appuyer sur ses épaules. C'est la philosophie qui relie tous les projets Wise Duck Dev — des outils utiles et innovants qui se composent les uns avec les autres et amplifient ce que les humains et l'IA peuvent bâtir, côte à côte.",
    },
    projectConclusionContent6: {
      EN: "Key takeaway: define your standards before you write the code, build the framework that AI will collaborate with you on, and then iterate relentlessly. The right discipline turns AI from an unpredictable assistant into a reliable engineering partner — and that is the most important shift in the way we build software today.",
      FR: "Leçon fondamentale : définis tes standards avant d'écrire le code, bâtis le framework dans lequel l'IA va collaborer avec toi, puis itère sans relâche. La bonne discipline transforme l'IA d'un assistant imprévisible en un véritable partenaire d'ingénierie fiable — et c'est le déplacement le plus important dans la manière dont nous bâtissons des logiciels aujourd'hui.",
    },
    buttonMainPage: {
      EN: "Main Page",
      FR: "Page Principale",
    },
    buttonNextProject: {
      EN: "Next Project",
      FR: "Projet Suivant",
    },
    buttonBack: {
      EN: "Go Back",
      FR: "Retour",
    },
    metaTitle: {
      EN: "ArchMapper - AI-Powered Reverse-Engineering Pipeline for Software Architecture",
      FR: "ArchMapper - Pipeline de rétro-ingénierie alimenté par l'IA pour l'architecture logicielle",
    },
    metaDescription: {
      EN: "ArchMapper is an AI-powered, fully automated, resumable reverse-engineering pipeline that turns any codebase into a structured architectural document, ready for human or LLM analysis.",
      FR: "ArchMapper est un pipeline de rétro-ingénierie alimenté par l'IA, entièrement automatisé et reprenable, qui transforme n'importe quel codebase en un document architectural structuré, prêt pour une analyse humaine ou par LLM.",
    },
    twitterImageAltDescription: {
      EN: "ArchMapper - AI-Powered Reverse-Engineering Pipeline for Software Architecture, depicted by an AI-generated image of the ArchMapper project branding",
      FR: "ArchMapper - Pipeline de rétro-ingénierie alimenté par l'IA pour l'architecture logicielle, représenté par une image générée par IA de l'identité visuelle du projet ArchMapper",
    },
    mainPictureAltDescription: {
      EN: "ArchMapper Project main image showing the project's AI automation branding",
      FR: "Image principale du projet ArchMapper illustrant l'identité visuelle de l'automatisation IA du projet",
    },
    og_locale: {
      EN: "en_US",
      FR: "fr_FR",
    },
  };

  const primaryImage = `https://www.wiseduckdev.com/images/projectsPictures/archmapper/archmapper_project_ai_automation.webp`;
  const facebookImage = `https://www.wiseduckdev.com/images/projectsPictures/archmapper/archmapper_project_ai_automation_Facebook.webp`;
  const twitterImage = `https://www.wiseduckdev.com/images/projectsPictures/archmapper/archmapper_project_ai_automation_Twitter.webp`;
  const orgUrl = `https://${siteUrl}`;

  const archMapperProjectUrl =
    activeLanguage === "EN"
      ? `https://${siteUrl}/archmapper-project`
      : `https://${siteUrl}/fr/archmapper-project`;

  const archMapperRepoUrl = `https://github.com/yannick-leguennec/archmapper`;

  const pageLanguage = activeLanguage === "EN" ? "en-US" : "fr-FR";

  const contactPoint =
    activeLanguage === "EN"
      ? "https://wiseduckdev.com/#contact"
      : "https://wiseduckdev.com/fr/#contact";

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${orgUrl}#website`,
        url: orgUrl,
        name: "Wise Duck Dev",
      },
      {
        "@type": "Organization",
        "@id": `${orgUrl}#organization`,
        name: "Wise Duck Dev",
        url: orgUrl,
        logo: {
          "@type": "ImageObject",
          url: `${orgUrl}/images/favicons/android-chrome-512x512.png`,
        },
        sameAs: ["https://x.com/wiseduckdev"],
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "inquiries",
            email: "wiseduckdev@gmail.com",
            url: contactPoint,
          },
        ],
      },
      {
        "@type": "SoftwareSourceCode",
        "@id": `${archMapperRepoUrl}#repo`,
        url: archMapperRepoUrl,
        name: "ArchMapper",
        codeRepository: archMapperRepoUrl,
        programmingLanguage: "TypeScript",
        license: "https://opensource.org/licenses/MIT",
      },
      {
        "@type": "WebPage",
        "@id": `${archMapperProjectUrl}#webpage`,
        author: {
          "@type": "Organization",
          "@id": "https://wiseduckdev.com#organization",
        },
        url: archMapperProjectUrl,
        name: translations.metaTitle[activeLanguage],
        description: translations.metaDescription[activeLanguage],
        isPartOf: { "@id": `${orgUrl}#website` },
        inLanguage: pageLanguage,
        primaryImageOfPage: { "@type": "ImageObject", url: primaryImage },
        image: [primaryImage, facebookImage, twitterImage],
        breadcrumb: { "@id": `${archMapperProjectUrl}#breadcrumb` },
        about: [
          { "@id": `${archMapperProjectUrl}#software` },
          { "@id": `${archMapperRepoUrl}#repo` },
        ],
        publisher: { "@id": `${orgUrl}#organization` },
        isAccessibleForFree: true,
        mainEntityOfPage: { "@id": `${archMapperProjectUrl}#software` },
        datePublished: "2026-05-05",
        dateModified: "2026-05-05",

        potentialAction: {
          "@type": "ReadAction",
          target: `${archMapperProjectUrl}`,
        },
      },
      {
        "@type": "Article",
        "@id": `${archMapperProjectUrl}#article`,
        headline: translations.metaTitle[activeLanguage],
        description: translations.metaDescription[activeLanguage],
        image: [primaryImage, facebookImage, twitterImage],
        author: {
          "@type": "Person",
          name: "Yannick Le Guennec",
          url: "https://wiseduckdev.com",
        },
        publisher: { "@id": `${orgUrl}#organization` },
        datePublished: "2026-05-05",
        dateModified: "2026-05-05",
        inLanguage: pageLanguage,
        isPartOf: { "@id": `${archMapperProjectUrl}#webpage` },
        mainEntityOfPage: { "@id": `${archMapperProjectUrl}#webpage` },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${archMapperProjectUrl}#software`,
        name: "ArchMapper",
        url: archMapperProjectUrl,
        additionalType: "https://schema.org/SoftwareSourceCode",
        applicationCategory: "DeveloperApplication",
        applicationSubCategory: "ReverseEngineering",
        operatingSystem: "All",
        inLanguage: ["en-US"],
        description:
          activeLanguage === "EN"
            ? "ArchMapper is an AI-powered, fully automated, resumable reverse-engineering pipeline that turns any codebase into a structured architectural document, ready for human or LLM analysis. Built in TypeScript, powered by the Anthropic Claude API, distributed under the MIT license."
            : "ArchMapper est un pipeline de rétro-ingénierie alimenté par l'IA, entièrement automatisé et reprenable, qui transforme n'importe quel codebase en un document architectural structuré, prêt pour une analyse humaine ou par LLM. Construit en TypeScript, propulsé par l'API Anthropic Claude, distribué sous licence MIT.",
        publisher: { "@id": `${orgUrl}#organization` },
        creator: { "@id": `${orgUrl}#organization` },
        image: primaryImage,
        thumbnailUrl: twitterImage,
        softwareVersion: "0.1",
        license: "https://opensource.org/licenses/MIT",
        sameAs: [archMapperRepoUrl],
        audienceType: [
          "Software Developers",
          "Software Architects",
          "AI Engineers",
          "Open-Source Contributors",
          "Reverse Engineers",
          "Researchers",
          "Technical Leads",
          "Engineering Managers",
          "AI Agent Developers",
          "Prompt Engineers",
        ],
        keywords: [
          "AI-powered reverse engineering",
          "codebase analysis",
          "software architecture analysis",
          "automated documentation",
          "LLM context generation",
          "Anthropic Claude",
          "Claude Sonnet",
          "Claude Opus",
          "TypeScript pipeline",
          "Zod schema validation",
          "bottom-up synthesis",
          "module synthesis",
          "agentic AI tooling",
          "prompt caching",
          "Anthropic Message Batches",
          "open-source developer tool",
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${archMapperProjectUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: activeLanguage === "EN" ? "Home" : "Accueil",
            item: orgUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name:
              activeLanguage === "EN"
                ? "ArchMapper Project"
                : "Projet ArchMapper",
            item: archMapperProjectUrl,
          },
        ],
      },
    ],
  } as const;

  return (
    <>
      <Head>
        <title>{translations.metaTitle[activeLanguage]}</title>
        <meta
          name="description"
          content={translations.metaDescription[activeLanguage]}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="alternate"
          hrefLang="x-default"
          href={`https://${siteUrl}/archmapper-project`}
        />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Wise Duck Dev" />
        <meta
          property="og:title"
          content={translations.metaTitle[activeLanguage]}
        />
        <meta
          property="og:description"
          content={translations.metaDescription[activeLanguage]}
        />
        <meta
          property="og:image"
          content={`https://www.wiseduckdev.com/images/projectsPictures/archmapper/archmapper_project_ai_automation_Facebook.webp`}
        />
        <meta
          property="og:url"
          content={
            activeLanguage === "FR"
              ? `https://${siteUrl}/fr/archmapper-project`
              : `https://${siteUrl}/archmapper-project`
          }
        />
        <meta
          property="og:locale"
          content={translations.og_locale[activeLanguage]}
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@wiseduckdev" />
        <meta name="twitter:creator" content="@wiseduckdev" />
        <meta
          name="twitter:title"
          content={translations.metaTitle[activeLanguage]}
        />
        <meta
          name="twitter:description"
          content={translations.metaDescription[activeLanguage]}
        />
        <meta
          name="twitter:image"
          content={`https://www.wiseduckdev.com/images/projectsPictures/archmapper/archmapper_project_ai_automation_Twitter.webp`}
        />
        <meta
          name="twitter:image:alt"
          content={translations.twitterImageAltDescription[activeLanguage]}
        />

        {siteUrl && (
          <>
            <link
              rel="alternate"
              hrefLang="en"
              href={`https://${siteUrl}/archmapper-project`}
            />
            <link
              rel="alternate"
              hrefLang="fr"
              href={`https://${siteUrl}/fr/archmapper-project`}
            />
          </>
        )}
        <link
          rel="canonical"
          href={
            activeLanguage === "EN"
              ? `https://${siteUrl}/archmapper-project`
              : `https://${siteUrl}/fr/archmapper-project`
          }
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>
      <div className={classes.mainContainer}>
        <WrappedArchMapper />
        <div className={classes.contentContainer}>
          <div className={classes.imagesContainer}>
            <img
              src={mainPicture.src}
              alt={translations.mainPictureAltDescription[activeLanguage]}
              className={classes.imagesBordered}
            />
          </div>
          {/* Introduction Section */}
          <h2 className={classes.subtitle}>
            {translations.pageSubtitle[activeLanguage]}
          </h2>
          <div className={classes.textContainer}>
            <p className={classes.textParagraph}>
              {translations.pageIntroduction1[activeLanguage]}
            </p>
            <p className={classes.textParagraph}>
              {translations.pageIntroduction2[activeLanguage]}
            </p>
          </div>
          {/* Overview Section */}
          <h2 className={classes.subtitle}>
            {translations.projectOverviewTitle[activeLanguage]}
          </h2>
          <div className={classes.textContainer}>
            <p className={classes.textParagraph}>
              {translations.projectOverviewContent1[activeLanguage]}
            </p>
            <p className={classes.textParagraph}>
              {translations.projectOverviewContent2[activeLanguage]}
            </p>
            <p className={classes.textParagraph}>
              {translations.projectOverviewContent3[activeLanguage]}
            </p>
            <p className={classes.textParagraph}>
              {translations.projectOverviewContent4[activeLanguage]}
            </p>
            <p className={classes.textParagraph}>
              {translations.projectOverviewContent5[activeLanguage]}
            </p>
          </div>
          {/* My Role Section */}
          <h2 className={classes.subtitle}>
            {translations.projectMyRoleTitle[activeLanguage]}
          </h2>
          <div className={classes.textContainer}>
            <p className={classes.textParagraph}>
              {translations.projectMyRoleContent1[activeLanguage]}
            </p>

            <ul className={classes.textList}>
              <li className={classes.textListItem}>
                {translations.projectMyRoleContentPoint1[activeLanguage]}
              </li>
              <li className={classes.textListItem}>
                {translations.projectMyRoleContentPoint2[activeLanguage]}
              </li>
              <li className={classes.textListItem}>
                {translations.projectMyRoleContentPoint3[activeLanguage]}
              </li>
              <li className={classes.textListItem}>
                {translations.projectMyRoleContentPoint4[activeLanguage]}
              </li>
              <li className={classes.textListItem}>
                {translations.projectMyRoleContentPoint5[activeLanguage]}
              </li>
            </ul>
            <p className={classes.textParagraph}>
              {translations.projectMyRoleContent2[activeLanguage]}
            </p>
          </div>
          {/* Creativity Section */}
          <h2 className={classes.subtitle}>
            {translations.projectCreativityTitle[activeLanguage]}
          </h2>
          <div className={classes.textContainer}>
            <p className={classes.textParagraph}>
              {translations.projectCreativityContent1[activeLanguage]}
            </p>
            <p className={classes.textParagraph}>
              {translations.projectCreativityContent2[activeLanguage]}
            </p>
            <p className={classes.textParagraph}>
              {translations.projectCreativityContent3[activeLanguage]}
            </p>
            <p className={classes.textParagraph}>
              {translations.projectCreativityContent4[activeLanguage]}
            </p>
          </div>
          {/* Process Section */}
          <h2 className={classes.subtitle}>
            {translations.projectProcessTitle[activeLanguage]}
          </h2>
          <div className={classes.textContainer}>
            <p className={classes.textParagraph}>
              {translations.projectProcessContent1[activeLanguage]}
            </p>
            <p className={classes.textParagraph}>
              {translations.projectProcessContent2[activeLanguage]}
            </p>
            <p className={classes.textParagraph}>
              {translations.projectProcessContent3[activeLanguage]}
            </p>
            <p className={classes.textParagraph}>
              {translations.projectProcessContent4[activeLanguage]}
            </p>
            <p className={classes.textParagraph}>
              {translations.projectProcessContent5[activeLanguage]}
            </p>
          </div>
          {/* Stack Section */}
          <h2 className={classes.subtitle}>
            {translations.projectStackTitle[activeLanguage]}
          </h2>
          <div className={classes.textContainer}>
            <ul className={classes.textList}>
              <li className={classes.textListItem}>
                {translations.projectStackPoint1[activeLanguage]}
              </li>
              <li className={classes.textListItem}>
                {translations.projectStackPoint2[activeLanguage]}
              </li>
              <li className={classes.textListItem}>
                {translations.projectStackPoint3[activeLanguage]}
              </li>
              <li className={classes.textListItem}>
                {translations.projectStackPoint4[activeLanguage]}
              </li>
              <li className={classes.textListItem}>
                {translations.projectStackPoint5[activeLanguage]}
              </li>
              <li className={classes.textListItem}>
                {translations.projectStackPoint6[activeLanguage]}
              </li>
              <li className={classes.textListItem}>
                {translations.projectStackPoint7[activeLanguage]}
              </li>
              <li className={classes.textListItem}>
                {translations.projectStackPoint8[activeLanguage]}
              </li>
              <li className={classes.textListItem}>
                {translations.projectStackPoint9[activeLanguage]}
              </li>
              <li className={classes.textListItem}>
                {translations.projectStackPoint10[activeLanguage]}
              </li>
            </ul>
            <p className={classes.textParagraph}>
              {translations.projectStackContent1[activeLanguage]}
            </p>
            <p className={classes.textParagraph}>
              {translations.projectStackContent2[activeLanguage]}
            </p>
          </div>
          {/* Design Section */}
          <h2 className={classes.subtitle}>
            {translations.projectDesignTitle[activeLanguage]}
          </h2>
          <div className={classes.textContainer}>
            <p className={classes.textParagraph}>
              {translations.projectDesignContent1[activeLanguage]}
            </p>
            <p className={classes.textParagraph}>
              {translations.projectDesignContent2[activeLanguage]}
            </p>
            <p className={classes.textParagraph}>
              {translations.projectDesignContent3[activeLanguage]}
            </p>
            <p className={classes.textParagraph}>
              {translations.projectDesignContent4[activeLanguage]}
            </p>
          </div>
          {/* Deployment Section */}
          <h2 className={classes.subtitle}>
            {translations.projectDeploymentTitle[activeLanguage]}
          </h2>
          <div className={classes.textContainer}>
            <p className={classes.textParagraph}>
              {translations.projectDeploymentContent1[activeLanguage]}
            </p>
            <p className={classes.textParagraph}>
              {translations.projectDeploymentContent2[activeLanguage]}
            </p>
            <p className={classes.textParagraph}>
              {translations.projectDeploymentContent3[activeLanguage]}
            </p>
            <p className={classes.textParagraph}>
              {translations.projectDeploymentContent4[activeLanguage]}
            </p>
          </div>
          {/* Roadmap Section */}
          <h2 className={classes.subtitle}>
            {translations.projectRoadmapTitle[activeLanguage]}
          </h2>
          <div className={classes.textContainer}>
            <ul className={classes.textList}>
              <li className={classes.textListItem}>
                {translations.projectRoadmapPoint1[activeLanguage]}
              </li>
              <li className={classes.textListItem}>
                {translations.projectRoadmapPoint2[activeLanguage]}
              </li>
              <li className={classes.textListItem}>
                {translations.projectRoadmapPoint3[activeLanguage]}
              </li>
              <li className={classes.textListItem}>
                {translations.projectRoadmapPoint4[activeLanguage]}
              </li>
              <li className={classes.textListItem}>
                {translations.projectRoadmapPoint5[activeLanguage]}
              </li>
            </ul>
            <p className={classes.textParagraph}>
              {translations.projectRoadmapContent1[activeLanguage]}
            </p>
          </div>
          {/* Results Section */}
          <h2 className={classes.subtitle}>
            {translations.projectResultsTitle[activeLanguage]}
          </h2>
          <div className={classes.textContainer}>
            <p className={classes.textParagraph}>
              {translations.projectResultsContent1[activeLanguage]}
            </p>
            <p className={classes.textParagraph}>
              {translations.projectResultsContent2[activeLanguage]}
            </p>
            <p className={classes.textParagraph}>
              {translations.projectResultsContent3[activeLanguage]}
            </p>
            <p className={classes.textParagraph}>
              {translations.projectResultsContent4[activeLanguage]}
            </p>
          </div>
          {/* Conclusion Section */}
          <h2 className={classes.subtitle}>
            {translations.projectConclusionTitle[activeLanguage]}
          </h2>
          <div className={classes.textContainer}>
            <p className={classes.textParagraph}>
              {translations.projectConclusionContent1[activeLanguage]}
            </p>
            <p className={classes.textParagraph}>
              {translations.projectConclusionContent2[activeLanguage]}
            </p>
            <p className={classes.textParagraph}>
              {translations.projectConclusionContent3[activeLanguage]}
            </p>
            <p className={classes.textParagraph}>
              {translations.projectConclusionContent4[activeLanguage]}
            </p>
            <p className={classes.textParagraph}>
              {translations.projectConclusionContent5[activeLanguage]}
            </p>
            <p className={classes.textParagraph}>
              {translations.projectConclusionContent6[activeLanguage]}
            </p>
          </div>
          <div className={classes.buttonsContainer}>
            <Link href="/#portfolio" className={classes.buttonReverted}>
              {translations.buttonBack[activeLanguage]}
            </Link>
            <Link href="/evidence-media-project" className={classes.button}>
              {translations.buttonNextProject[activeLanguage]}
            </Link>
          </div>
        </div>
      </div>
      <Footer />
      <SpeedInsights />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
