import { Routes, Route, Navigate, useParams, useNavigate } from "react-router-dom";
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
import Seo from "./Seo";

function LegalOverlayRoute(props) {
  const navigate = useNavigate();
  const OverlayComponent = props.Component;
  return <OverlayComponent onClose={() => navigate(-1)} />;
}

function LangApp() {
  const { lang } = useParams();
  const language = lang === "en" ? "en" : "de";

  // Redirect unknown language prefixes to /de for canonical, SEO-friendly URLs.
  if (lang !== "de" && lang !== "en") {
    return <Navigate to="/de" replace />;
  }

  return (
    <LanguageProvider forcedLanguage={language}>
      <ScrollToTop />
      <Seo />
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
            <Route
              path="/service"
              element={<Features hiddenKeys={["phone", "tv"]} />}
            />
            <Route path="/preise" element={<Pricing />} />
            <Route path="/bilder" element={<Gallery />} />
            <Route path="/anreise" element={<Map />} />
            <Route path="/kontakt" element={<Contact />} />

            <Route
              path="/impressum"
              element={<LegalOverlayRoute Component={Impressum} />}
            />
            <Route
              path="/datenschutz"
              element={<LegalOverlayRoute Component={Datenschutz} />}
            />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/de" replace />} />
      <Route path="/:lang/*" element={<LangApp />} />
      <Route path="*" element={<Navigate to="/de" replace />} />
    </Routes>
  );
}

export default App;
