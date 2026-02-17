import { Suspense, lazy } from "react";
import { Routes, Route, Navigate, useParams, useNavigate } from "react-router-dom";
import { LanguageProvider } from "../i18n";

import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";
import Apartments from "./Apartments";
import ScrollToTop from "./ScrollToTop";
import Seo from "./Seo";

const About = lazy(() => import("./About"));
const Region = lazy(() => import("./Region"));
const Features = lazy(() => import("./Features"));
const Pricing = lazy(() => import("./Pricing"));
const Gallery = lazy(() => import("./Gallery"));
const Map = lazy(() => import("./Map"));
const Contact = lazy(() => import("./Contact"));
const Faq = lazy(() => import("./Faq"));
const Impressum = lazy(() => import("./Impressum"));
const Datenschutz = lazy(() => import("./Datenschutz"));

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
          <Suspense fallback={null}>
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
              <Route path="/faq" element={<Faq />} />
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
          </Suspense>
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
