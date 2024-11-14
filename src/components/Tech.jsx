import React from "react";
import { styles } from '../styles';

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motion';

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} mt-20 mb-10 text-center`}> Skills.</h2>
      </motion.div>
      <div className='flex flex-row flex-wrap justify-center gap-10 cursor-pointer mt-5'>
        {technologies.map((technology) => (
          <div className='w-28 h-28 text-white' key={technology.name} >
            <BallCanvas icon={technology.icon} />
            <div className='flex justify-center items-center text-white'>
              {technology.name}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");