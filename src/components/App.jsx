import { useState } from "react";
import { LanguageProvider } from "./i18n";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Impressum from "./components/Impressum";
import Datenschutz from "./components/Datenschutz";

function App() {
  const [showImpressum, setShowImpressum] = useState(false);
  const [showDatenschutz, setShowDatenschutz] = useState(false);

  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {/* Your existing page components go here */}
          <Hero />
          <Features />
          <Gallery />
          <Contact />
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
