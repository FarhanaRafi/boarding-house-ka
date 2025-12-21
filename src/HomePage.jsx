import Hero from "./components/Hero";
import About from "./components/About";
import Region from "./components/Region";
import Features from "./components/Features";
import Apartments from "./components/Apartments";
import Gallery from "./components/Gallery";
import Map from "./components/Map";
import Contact from "./components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero id="home" />
      <About id="ueber-uns" />
      <Region id="region" />
      <Features id="service" />
      <Apartments />
      <Gallery id="bilder" />
      <Map id="anreise" />
      <Contact id="kontakt" />
    </>
  );
}
