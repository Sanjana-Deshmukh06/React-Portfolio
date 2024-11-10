import { motion } from "framer-motion";
import StarsCanvas from '../components/canvas/Stars'; // Assuming you have a StarsCanvas component

const Preloader = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-primary z-[1000]">
      {/* Starry Background Canvas */}
      <StarsCanvas />

      {/* Loading Text */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="text-3xl text-center w-full flex items-center justify-center text-white font-bold mb-8 z-[1001]"
      >
        Hold On! Crafting Pixels and Code for You...
      </motion.h1>

      {/* Animated Circles below the text */}
      <motion.div
        className="relative flex space-x-4 mb-4 z-[1001]"
        animate={{ scale: [0.5, 1.2, 0.5], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-6 bg-secondary rounded-full" />
        <div className="w-6 h-6 bg-secondary rounded-full" />
        <div className="w-6 h-6 bg-secondary rounded-full" />
      </motion.div>
    </div>
  );
};

export default Preloader;
