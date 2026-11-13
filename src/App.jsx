import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Gallery from "./Components/Gallery";
import Experience from "./Components/Experience";
import Location from "./Components/Location";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Gallery />
        <Experience />
        <Location />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
