import React, { useState, useEffect, Suspense } from "react";
import Head from "next/head";
import Image from "next/image";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useLanguage } from "../../context/LanguageContext";
import { TranslationsType } from "../../types/TranslationsType";
import main_picture from "../../public/images/gpts/duck-mib-main.webp";
import Header from "../../components/Header/Header";

export default function GPTS() {
  return (
    <>
      <Header />
      <h1>Hello GPTS</h1>
    </>
  );
}
