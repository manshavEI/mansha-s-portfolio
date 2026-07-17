import About from "./components/About";
import Contact from "./components/Contact";
import CosmicBackground from "./components/CosmicBackground";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Stats from "./components/Stats";

function App() {
  return (
    <div className="site-shell">
      <CosmicBackground />
      <Header />
      <main>
        <Hero />
        <About />
        <Stats />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
