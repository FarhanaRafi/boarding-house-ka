import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "../i18n";

import Header from "./Header";
import Hero from "./Hero";
import Features from "./Features";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Footer from "./Footer";
import Impressum from "./Impressum";
import Datenschutz from "./Datenschutz";
import About from "./About";
import Region from "./Region";
import Map from "./Map";
import Apartments from "./Apartments";
import Pricing from "./Pricing";
import ScrollToTop from "./ScrollToTop";

function App() {
  const [showImpressum, setShowImpressum] = useState(false);
  const [showDatenschutz, setShowDatenschutz] = useState(false);

  return (
    <LanguageProvider>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Apartments />
                </>
              }
            />
            <Route path="/ueber-uns" element={<About />} />
            <Route path="/region" element={<Region />} />
            <Route path="/service" element={<Features />} />
            <Route path="/bilder" element={<Gallery />} />
            <Route path="/anreise" element={<Map />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer
          onImpressumClick={() => setShowImpressum(true)}
          onDatenschutzClick={() => setShowDatenschutz(true)}
        />
      </div>

      {showImpressum && <Impressum onClose={() => setShowImpressum(false)} />}

      {showDatenschutz && (
        <Datenschutz onClose={() => setShowDatenschutz(false)} />
      )}
    </LanguageProvider>
  );
}

export default App;
