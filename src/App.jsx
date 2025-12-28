import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Home from "./sections/Home";
import Projects from "./sections/Project";
import Skills from "./sections/Skills";
import Loader from "./components/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <Loader key="loader" finishLoading={() => setIsLoading(false)} />
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="bg-base-100 min-h-screen">
            <Navbar />
            <main className="relative overflow-x-hidden">
              <div className="max-w-5xl mx-auto px-6 lg:px-4">
                <Home />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Contact />
              </div>
            </main>
            <Footer />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
