import { useState } from "react";
import { LanguageProvider } from "./i18n";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Region from "./components/Region";
import Features from "./components/Features";
import Apartments from "./components/Apartments";
import Gallery from "./components/Gallery";
import Map from "./components/Map";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Impressum from "./components/Impressum";
import Datenschutz from "./components/Datenschutz";
import NotFound from "./components/NotFound";

function App() {
  const [showImpressum, setShowImpressum] = useState(false);
  const [showDatenschutz, setShowDatenschutz] = useState(false);

  return (
    <LanguageProvider>
      {/* Show the normal app only on the root path. For any other pathname render 404 */}
      {typeof window !== "undefined" && window.location && window.location.pathname !== "/" ? (
        <NotFound />
      ) : (
        <>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              <Hero />
              <About />
              <Region />
              <Features />
              <Apartments />
              <Gallery />
              <Map />
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
        </>
      )}
    </LanguageProvider>
  );
}

export default App;
