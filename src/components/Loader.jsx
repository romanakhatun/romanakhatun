import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Loader = ({ finishLoading }) => {
  const [stage, setStage] = useState(1);

  useEffect(() => {
    // Stage 1: Brackets appear (0s - 1s)
    // Stage 2: R Core appears (1s - 2s)
    // Stage 3: Systems Check (2s - 3s)
    const timers = [
      setTimeout(() => setStage(2), 1000),
      setTimeout(() => setStage(3), 2200),
      setTimeout(() => finishLoading(), 3500),
    ];

    return () => timers.forEach((t) => clearTimeout(t));
  }, [finishLoading]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        y: "-100%",
        transition: { duration: 0.8, ease: [0.87, 0, 0.13, 1] },
      }}
      className="fixed inset-0 z-200 flex flex-col items-center justify-center bg-[#0d1526]"
    >
      <div className="relative flex items-center justify-center">
        {/* Stage 1: The Frame (Brackets) */}
        <div className="flex items-center">
          <motion.span
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="text-7xl text-primary font-light"
          >
            &#123;
          </motion.span>

          {/* Stage 2: The Core (The R) */}
          <div className="relative overflow-hidden px-4">
            <AnimatePresence>
              {stage >= 2 && (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  className="block text-8xl font-black text-white"
                  transition={{ duration: 0.6, ease: "circOut" }}
                >
                  R
                </motion.span>
              )}
            </AnimatePresence>

            {/* Stage 3: The Technical Scanline */}
            {stage === 3 && (
              <motion.div
                initial={{ top: 0 }}
                animate={{ top: "100%" }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 w-full h-0.5 bg-primary z-10 shadow-[0_0_15px_rgba(117,106,246,0.8)]"
              />
            )}
          </div>

          <motion.span
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="text-7xl text-primary font-light"
          >
            &#125;
          </motion.span>
        </div>

        {/* Technical Status Text (Changes based on stage) */}
        <div className="absolute -bottom-16">
          <AnimatePresence mode="wait">
            <motion.p
              key={stage}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="text-[9px] uppercase tracking-[0.6em] text-primary/50"
            >
              {stage === 1 && "Constructing_Shell"}
              {stage === 2 && "Injecting_Core_Logic"}
              {stage === 3 && "Verification_Complete"}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      {/* Background Ambient Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute w-125 h-125 bg-primary/10 rounded-full blur-[120px] -z-10"
      />
    </motion.div>
  );
};

export default Loader;
