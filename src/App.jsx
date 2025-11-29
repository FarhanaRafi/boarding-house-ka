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

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <About />
          <Region />
          <Features />
          <Apartments />
          <Gallery />
          <Map />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
