import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Home from "./sections/Home";
import Projects2 from "./sections/Porject2";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

function App() {
  return (
    <div className="bg-base-100 min-h-screen">
      <Navbar />
      <main className="relative overflow-x-hidden">
        <div className="max-w-4xl mx-auto px-6 lg:px-4">
          <section id="home" className="pt-37 pb-35">
            <Home />
          </section>

          {/* About Section */}
          <section id="about">
            <About />
          </section>
          <Skills />

          {/* Projects Section */}
          {/* <section id="projects" className="py-30"> */}
          <Projects2 />
          {/* </section> */}
          <section id="experience" className="">
            <Experience />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default App;
