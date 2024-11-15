import React from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/meter1.svg";
import colorSharp from "../assets/color-sharp.png";

const Tech = () => {
  // Carousel responsiveness settings
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      {/* Section Title */}
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} mt-10 mb-10 text-center`}>
          Skills
        </h2>
      </motion.div>

      {/* Skills Section with Background Image */}
      <section
        className="skill relative bg-cover bg-center  pb-16"
        style={{ backgroundImage: `url(${colorSharp})` }}
        id="skills"
      >
        <div className="container mx-auto">
          <div className="skill-bx">
            <motion.div variants={fadeIn("down", "tween", 0.2, 1) }>
              <p className={` text-md font-bold text-secondary text-center p-8`}>
              Showcasing the skills that are revolutionizing the digital landscape -
              </p>
            </motion.div>

            {/* Technologies Carousel */}
            <Carousel
             responsive={responsive}
             infinite={true}
             autoPlay={true}
             autoPlaySpeed={0} // Setting speed to 0 for continuous play
             transitionDuration={2000} // Longer duration for a smooth flow
             swipeable={false} // Disable swiping for a more carousel-like feel
             draggable={false} // Disable dragging to maintain smoothness
             keyBoardControl={false} 
             partialVisible={false}
             arrows={true}
             showDots={false}
             className="skill-slider"
            >
              {/* Loop through technologies array */}
              {technologies.map((technology, index) => (
                <div
                  key={index}
                  className="item flex flex-col justify-center items-center relative"
                >
                  {/* Meter Image as Background */}
                  <div className="relative w-40 h-40 flex justify-center items-center">
                    <img
                      src={meter1}
                      alt="Meter Background"
                      className="absolute w-full h-full object-contain"
                    />
                    {/* Display Static Icon Image */}
                    <div className="absolute w-16 h-16 z-10 flex justify-center items-center">
                      <img
                        src={technology.icon}
                        alt={technology.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  {/* Technology Name */}
                  <h5 className="text-white mt-2">{technology.name}</h5>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionWrapper(Tech, "");
