import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { menu, close, logo2 } from '../assets';
import ProfileCard from './ProfileCard';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [showProfileCard, setShowProfileCard] = useState(false);

  const handleLogoClick = () => {
    setActive('');
    setShowProfileCard(!showProfileCard);
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <div
          className="flex items-center gap-2"
          onClick={handleLogoClick}
        >
          <img
            src={logo2}
            alt="logo"
            className="w-14 h-14 object-contain rounded-full animate-pulse cursor-pointer"
          />
          <p className="text-white text-[18px] font-bold flex">
            👋&nbsp;
            <span className="sm:block hidden text-white text-[18px] font-medium 
            hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-red-500 
            hover:bg-clip-text hover:text-transparent">
              | MERN Stack Developer
            </span>
          </p>
        </div>

        {/* Navigation Links */}
        <ul className="list-none hidden py-2 px-4 sm:flex flex-row gap-10 rounded-full">
          {navLinks.map((nav) =>
            nav.id === "cv" ? (
              <li key={nav.id}>
                <a
                  href="https://drive.google.com/file/d/1AoSq6_n8qo9VdiLbNSoB8tS1oOAslURV/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-[18px] font-medium cursor-pointer 
                  hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-red-500 
                  hover:bg-clip-text hover:text-transparent"
                >
                  {nav.title}
                </a>
              </li>
            ) : (
              <li
                key={nav.id}
                className={`${active === nav.title ? 'text-white' : 'text-secondary'
                  } text-white text-[18px] font-medium cursor-pointer 
                hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-red-500 
                hover:bg-clip-text hover:text-transparent`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            )
          )}
        </ul>

        {/* Mobile Menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`${active === nav.title ? 'text-white' : 'text-secondary'
                    } text-white text-[16px] font-medium cursor-pointer 
                  hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-red-500 
                  hover:bg-clip-text hover:text-transparent`}
                  onClick={() => {
                    setToggle(false);
                    setActive(nav.title);
                  }}
                >
                  {nav.id === "cv" ? (
                    <a
                      href="https://drive.google.com/file/d/1AoSq6_n8qo9VdiLbNSoB8tS1oOAslURV/view?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {nav.title}
                    </a>
                  ) : (
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Profile Card */}
      <ProfileCard
        isVisible={showProfileCard}
        onClose={() => setShowProfileCard(false)}
      />
    </nav>
  );
};

export default Navbar;
