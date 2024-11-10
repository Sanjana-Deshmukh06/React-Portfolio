import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { motion } from 'framer-motion';
import { fadeIn } from "../utils/motion";
import ToastsContainer from './ToastsContainer'; // Import the ToastsContainer

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto bg-hero-pattern bg-cover bg-center overflow-hidden">
      {/* Include the ToastsContainer here */}
      <ToastsContainer />

      <div className={`absolute inset-0 top-[70px] mx-auto ${styles.paddingX} flex flex-row items-start gap-5 max-w-full`}>
        <div className="flex flex-col justify-center items-center mt-8">
          <div className="w-5 h-5 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-purple-500" />
          <div className="w-1 xs:h-80 h-80 bg-gradient-to-b from-pink-500 via-purple-500 to-transparent" />
        </div>

        <motion.div
          variants={fadeIn("left", "spring", 0.5, 1)}
          initial="hidden"
          animate="show"
          className="max-w-full"
        >
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent bg-[length:200%_200%] bg-gradient-float">
                Sanjana
              </span>
            </h1>
            <p className={`${styles.heroSubText} text-white-100 max-w-lg`}>
              Aspiring Software Developer,
              <span> Transforming Ideas into Applications</span>
            </p>
          </div>
        </motion.div>
      </div>

      <ComputersCanvas />
    </section>
  );
};

export default Hero;
