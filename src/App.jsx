import Navbar from "./components/Navbar";
import About from "./sections/About";
import Home from "./sections/Home";
import Projects from "./sections/Projects";

function App() {
  return (
    <div className="bg-base-100 min-h-screen">
      <Navbar />
      <main className="relative overflow-x-hidden">
        <div className="max-w-4xl mx-auto px-6 lg:px-4">
          <section id="home" className="pt-35 pb-12">
            <Home />
          </section>

          {/* About Section */}
          <section id="about" className="py-30">
            <About />
          </section>

          {/* Projects Section */}
          <section id="projects" className="pb-30">
            <Projects />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
