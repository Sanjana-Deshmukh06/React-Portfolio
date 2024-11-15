import React from 'react';
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, slideIn } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { email, Github, telegram, linkdin, resume } from '../assets';

const ServiceCard = ({ index, title, icon }) => {

  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 1)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title}
            className='w-25 h-25 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}
          </h3>

        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.p
        variants={slideIn('right', 'tween', 0.2, 1)}>
        <div className="relative xs:bottom-2 flex justify-center mb-8">
          <ul className="flex flex-row space-x-4 cursor-pointer">

            <li className="hover:-translate-y-6 transform transition-all duration-200 ">
              <a href="mailto:sanjanadeshmukh30@gmail.com">
                <img src={email} alt={email} className='w-12 h-12 object-contain rounded-full shadow-sm shadow-gray-100 hover:shadow-lg hover:shadow-purple-800
                p-1' />
              </a>
            </li>

            <li className="hover:-translate-y-6 transform transition-all duration-200">
              <a href="contact">
                <img src={telegram} alt={telegram} className='w-12 h-12 object-contain rounded-full 
              shadow-sm shadow-gray-100 p-1 hover:shadow-lg hover:shadow-purple-800'  />
              </a>
            </li>

            <li className="hover:-translate-y-6 transform transition-all duration-200">
              <a href=" https://www.linkedin.com/in/sanjana-deshmukh-685896214/">
                <img src={linkdin} alt={linkdin} className='w-12 h-12 object-contain rounded-full 
              shadow-sm shadow-gray-100 p-1 hover:shadow-lg hover:shadow-purple-800' />
              </a>
            </li>

            <li className="hover:-translate-y-6 transform transition-all duration-200">
              <a href=" https://github.com/Sanjana-Deshmukh06/">
                <img src={Github} alt={Github} className='w-12 h-12 object-contain rounded-full
            shadow-sm shadow-gray-100 p-1 hover:shadow-lg hover:shadow-purple-800' />
              </a>
            </li>
          </ul>
        </div>
      </motion.p>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}>
        <b> <p className={`${styles.sectionSubText}text-white text-center`} >Hey There! I’m Sanjana👩‍💻</p></b>
        <h2 className={styles.sectionHeadText}></h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary  text-[17px] lg:text-center leading-[30px]'
      >
        My programming journey has been an exciting leap into a world of endless possibilities. From C and Java to JavaScript, I’ve enjoyed bringing ideas to life through coding.
        <br />  I’m passionate about building dynamic web applications with the MERN stack to deliver engaging user experiences.

        I love web development, from designing user-friendly interfaces to building solid backends with MySQL and MongoDB. Every project is a new opportunity, and I’m always ready to explore fresh challenges.
        <br />Let’s create something great together!🤝<br />

        <a href={resume} download="Sanjana_Deshmukh"><button
          type='submit'
          className='bg-tertiary py-4 px-8 w-fit text-white font-semibold shadow-primary rounded-xl mt-4 shadow-sm 
                     transition-all duration-300 ease-in-out 
                     hover:scale-105 
                     hover:bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 
                   hover:text-gray-100 '
          >
          Download CV
        </button>
        </a>
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 cursor-pointer'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index}{...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");