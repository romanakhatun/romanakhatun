import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Home from "./sections/Home";
import Projects from "./sections/Project";
import Skills from "./sections/Skills";

function App() {
  return (
    <div className="bg-base-100 min-h-screen">
      <Navbar />
      <main className="relative overflow-x-hidden">
        <div className="max-w-4xl mx-auto px-6 lg:px-4">
          <Home />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default App;
