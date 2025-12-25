import Navbar from "./components/Navbar";
import About from "./sections/About";
import Home from "./sections/Home";

function App() {
  return (
    <div className="bg-base-100 min-h-screen relative overflow-x-hidden">
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 lg:px-4">
        <section id="home" className="pt-24 pb-12">
          <Home />
        </section>
        <About />
      </main>
    </div>
  );
}

export default App;
