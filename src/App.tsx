import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Labs from "./sections/Labs";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
import SmoothScroll from "./components/SmoothScroll";
import Loader from "./components/Loader";


function App() {
  return (
    <>
      <SmoothScroll />
      <Loader />

      <Cursor />
      <Navbar />

      <main>
        <Hero />

        <About />

        <Skills />

        <Projects />

        <Experience />

        <Labs />

        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
