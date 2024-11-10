import React from 'react';
import avatar from '../assets/avtar2.avif';
import { email, Github, telegram, linkdin, close } from '../assets';
import { motion } from 'framer-motion';

const ProfileCard = ({ isVisible, onClose }) => {
    if (!isVisible) return null; // Hide ProfileCard if not visible

    return (
        <>
            {/* Background Overlay with Blur */}
            <motion.div
                className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-xs z-10"
                onClick={onClose} // Close the card when clicking outside
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            ></motion.div>

            {/* Gradient Border Wrapper */}
            <motion.div
                className="fixed top-16 transform mt-4 animate-fadeIn bg-gradient-to-r from-pink-500 via-red-500 to-purple-500 rounded-lg p-[1px] shadow-lg z-20 w-10/11 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.3 }}
            >
                {/* Profile Card */}
                <motion.div
                    className="bg-primary text-white p-4 rounded-lg"
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <div className="flex flex-col items-center relative">
                        {/* Close Button */}
                        <img
                            src={close}
                            alt="Close"
                            className="w-5 h-5 absolute top-2 right-1 cursor-pointer"
                            onClick={onClose}
                        />

                        {/* Avatar Image */}
                        <motion.img
                            src={avatar}
                            alt="Sanjana Deshmukh"
                            className="w-20 h-20 rounded-full mb-3 border-2 border-secondary hover:shadow-lg hover:shadow-purple-800"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.4 }}
                        />

                        {/* Name and Role */}
                        <motion.h2
                            className="text-lg font-semibold text-center text-[#915eff] mt-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            Sanjana Deshmukh
                        </motion.h2>
                        <motion.p
                            className="text-sm text-center mb-6 mt-1"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            MERN Stack Developer
                        </motion.p>

                        {/* Social Icons */}
                        <motion.ul
                            className="flex flex-wrap justify-center gap-4 mb-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                        >
                            <li className="hover:-translate-y-2 transform transition-all duration-200">
                                <a href="mailto:sanjanadeshmukh30@gmail.com">
                                    <img
                                        src={email}
                                        alt="Email"
                                        className="w-8 h-8 object-contain rounded-full p-1 shadow-sm shadow-gray-100 hover:shadow-lg hover:shadow-purple-800"
                                    />
                                </a>
                            </li>
                            <li className="hover:-translate-y-2 transform transition-all duration-200">
                                <a href="https://t.me/Sanjana">
                                    <img
                                        src={telegram}
                                        alt="Telegram"
                                        className="w-8 h-8 object-contain rounded-full p-1 shadow-sm shadow-gray-100 hover:shadow-lg hover:shadow-purple-800"
                                    />
                                </a>
                            </li>
                            <li className="hover:-translate-y-2 transform transition-all duration-200">
                                <a href="https://www.linkedin.com/in/sanjana-deshmukh-685896214/">
                                    <img
                                        src={linkdin}
                                        alt="LinkedIn"
                                        className="w-8 h-8 object-contain rounded-full p-1 shadow-sm shadow-gray-100 hover:shadow-lg hover:shadow-purple-800"
                                    />
                                </a>
                            </li>
                            <li className="hover:-translate-y-2 transform transition-all duration-200">
                                <a href="https://github.com/Sanjana-Deshmukh06/">
                                    <img
                                        src={Github}
                                        alt="GitHub"
                                        className="w-8 h-8 object-contain rounded-full p-1 shadow-sm shadow-gray-100 hover:shadow-lg hover:shadow-purple-800"
                                    />
                                </a>
                            </li>
                        </motion.ul>

                        {/* Hire Me Button */}
                        <motion.button
                            onClick={onClose}
                            className="bg-tertiary py-2 px-4 w-fit text-white font-semibold shadow-primary rounded-xl mt-4 shadow-sm 
                                transition-all duration-300 ease-in-out 
                                hover:scale-105 
                                hover:bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 
                                hover:text-gray-100"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                            <a href="#contact" className="hover:text-gray-100">
                                Hire Me
                            </a>
                        </motion.button>
                    </div>
                </motion.div>
            </motion.div>
        </>
    );
};

export default ProfileCard;
