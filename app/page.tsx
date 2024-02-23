"use client";

import React, { Suspense } from "react";
import { LanguageProvider } from "./context/LanguageContext";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Profil from "./components/Profil/Profil";
import Skills from "./components/Skills/Skills";
import Image from "next/image";
import duckCoach from "@/app/public/images/duck-coach-desktop.png";

export default function Home() {
  return (
    <LanguageProvider>
      <Suspense fallback={<div>Loading...</div>}></Suspense>
      <main>
        <Header />
        <Main />
        <Profil />
        <Skills />
        <Image
          src={duckCoach}
          alt="Wise Duck Dev - Web and Web Mobile Developer"
        />
      </main>
    </LanguageProvider>
  );
}
