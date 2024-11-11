import React from "react";
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { motion } from 'framer-motion';


const Footer = () => {
  return (
    <footer className={`${styles.paddingX} mt-6 w-full py-4 bottom-0 z-20 bg-primary shadow-sm shadow-gray-100`}>
      <div className='w-full max-w-7xl mx-auto flex flex-wrap items-center justify-between'>
        {/* Left Section */}
        <div className="flex flex-1 justify-center md:justify-start text-center py-2">
          <Link
            to="/"
            className='flex items-center gap-2'
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <p className={`${styles.sectionSubText}text-white font-bold text-sm md:text-base`}>
              Developed By &nbsp;| 
              <span className="cursor-pointer px-2 text-[#915eff] hidden md:inline-block">
                @Sanjana-Deshmukh
              </span>
              <span className="cursor-pointer px-2 text-[#915eff] md:hidden">
                @SD
              </span>
            </p>
          </Link>
        </div>
{/* Middle Section (Arrow animation) */}
<div className="flex flex-1 justify-center py-2">
            <a href="#about">
              <div className="w-[25px] h-[40px] rounded-3xl border-4 border-secondary flex justify-center items-start p-1.5">
                <motion.div
                  animate={{ y: [0, 13, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: 'loop'
                  }}
                  className='w-5 h-2 rounded-full bg-secondary mb-1'
                />
              </div>
            </a>
          </div>
        {/* Right Section (Copyright) */}
        <div className="flex flex-1 justify-center md:justify-end text-center py-2">
          <p className={`${styles.sectionSubText}ttext-white font-bold text-sm md:text-base`}>
          © 2024 SD. All rights reserved.
          </p>
        </div>
      </div>

    
    </footer>
  );
};

export default Footer;
