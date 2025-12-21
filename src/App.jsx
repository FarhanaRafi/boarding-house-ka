import { Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./i18n";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./HomePage";
import Impressum from "./components/Impressum";
import Datenschutz from "./components/Datenschutz";

function App() {
  return (
    <LanguageProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
          </Routes>
        </main>
        <Footer
          onImpressumClick={() => {}}
          onDatenschutzClick={() => {}}
        />
      </div>
    </LanguageProvider>
  );
}

export default App;
