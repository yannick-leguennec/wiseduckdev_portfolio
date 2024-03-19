import React, { useState, useEffect, Suspense } from "react";
import Head from "next/head";
import Image from "next/image";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useLanguage } from "../../context/LanguageContext";
import { TranslationsType } from "../../types/TranslationsType";
import main_picture from "../../public/images/gpts/duck-mib-main.webp";
import Header from "../../components/Header/Header";
import Main_GPTs from "../../components/Main_GPTs/Main_GPTs";
import GPTs from "../../components/GPTs/GPTs";
import Footer from "../../components/Footer/Footer";

export default function GPTS() {
  return (
    <>
      <Header />
      <Main_GPTs />
      <GPTs />
      <Footer />
    </>
  );
}
