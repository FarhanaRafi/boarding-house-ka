import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useLanguage } from "../i18n";


export default function NotFound() {
    const { t } = useLanguage();
 
  return (
    <div className="flex flex-col min-h-screen">
      <Header forceScrolled />
      <main className="flex-grow flex items-center justify-center p-8">
        <div className="max-w-xl text-center">
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <h3 className="text-4xl font-bold mb-4">{t.notFound.mainText}</h3>
          <p className="text-lg mb-6">{t.notFound.midText}</p>
          <a
            href="/"
            className="inline-block px-6 py-3 bg-[#f97316] text-white rounded hover:bg-[#70350a]"
          >
            {t.notFound.buttonText}
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
