import Navbar from "./components/Navbar";
import About from "./sections/About";
import Home from "./sections/Home";

function App() {
  return (
    <div className="bg-base-100 min-h-screen">
      <Navbar />
      <main className="relative overflow-x-hidden">
        <div className="max-w-4xl mx-auto px-6 lg:px-4">
          <section id="home" className="pt-35 pb-12">
            <Home />
          </section>
          <About />
        </div>
      </main>
    </div>
  );
}

export default App;
