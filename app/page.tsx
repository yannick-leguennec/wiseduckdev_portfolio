"use client";

import { LanguageProvider } from "./context/LanguageContext";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Profil from "./components/Profil/Profil";

export default function Home() {
  return (
    <LanguageProvider>
      <>
        <Header />
        <Main />
        <Profil />
      </>
    </LanguageProvider>
  );
}
