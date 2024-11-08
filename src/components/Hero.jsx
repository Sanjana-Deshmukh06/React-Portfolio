import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from "../utils/motion";


const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto bg-hero-pattern bg-cover  bg-center`}>

      <div
        className={`absolute inset-0 top-[90px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 xs:h-80 h-80 violet-gradient' />
        </div>
        <motion.div variants={fadeIn("left", "spring", 0.50, 1)} initial="hidden"
          animate="show">
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi,I'm<span className="text-[#915eff] "> Sanjana</span>
            </h1>

            <div>

            </div>
            <p className={`${styles.heroSubText}  text-white-100 `}>Aspiring Software Developer,<span className=""><br />  Transforming Ideas into Applications </span>
            </p>
          </div>
        </motion.div>
      </div>

      <br /> <br /> <br /> <br />
      <ComputersCanvas />
    </section>
  )
}

export default Hero
