import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github } from '../assets';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ProjectCard = ({ name, description, tags, image, source_code_link, index }) => {
  console.log({ name });
  return (

    < motion.div
      variants={fadeIn('up', 'spring', index * 0.5, 1)}
    >
      <Tilt
        options={{
          max: 60,
          scale: 1,
          speed: 450

        }}
        className='bg-tertiary rounded-2xl p-5 sm:w-[350px] w-full mt-5 flex justify-evenly items-center flex-col'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, '_blank')}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt={name}
                className='w-3/4 h-3/4' object-contain
              />
            </div>
          </div>
        </div>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div >
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} mt-10 text-center`}>My Works</p>
        <h2 className={`${styles.sectionHeadText} text-center mb-10`}>Projects.</h2>
      </motion.div>
      

      {/* Added flex container for aligning project cards */}
      <div className='flex flex-wrap justify-center gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={project.name} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
