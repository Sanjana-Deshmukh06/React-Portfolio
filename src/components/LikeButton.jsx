import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const LikeButton = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const heartRef = useRef(null);

  // Handle the like button click
  const handleLikeClick = () => {
    setIsLiked(true);
    setShowPopup(true);
  };

  // Close the popup
  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      {/* Like Button with Heart */}
      <div className="flex  mx-6 mt-4 justify-center">
        <button
          onClick={handleLikeClick}
          className="flex items-center text-white text-xl cursor-pointer"
        >
          <motion.span
            ref={heartRef}
            className={`heart-icon ${isLiked ? 'animate-scaleUp' : 'animate-bounce '}`}
            style={{
              marginRight: '10px',
              transition: 'transform 0.3s ease-in-out',
              transform: isLiked ? 'scale(1.5)' : 'scale(1)',
              fontSize: '24px',
              color: isLiked ? 'red' : 'white',
            }}
          >
            {isLiked ? '❤️' : '🤍'}
          </motion.span>
        </button>
      </div>

      {/* Profile Card Popup */}
      {showPopup && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-xs z-20 flex justify-center items-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="animate-fadeIn bg-gradient-to-r from-pink-500 via-red-500 to-purple-500 p-[1px] rounded-lg shadow-lg w-10/11 max-w-md">
            <div className="bg-primary text-white p-6 rounded-lg relative">
              {/* Close Button */}
              <button
                onClick={closePopup}
                className="absolute top-2 right-2 text-xl font-bold text-gray-500 hover:text-gray-700"
              >
                X
              </button>

              {/* Title and Text */}
              <h2 className="text-lg font-semibold text-center text-[#915eff] mb-4">
                Thank you for your Like!🤩
              </h2>
              <p className="text-center text-gray-200 mb-6">
                Enjoy browsing the site. We appreciate your support!
              </p>

              {/* Close Button */}
              <div className="text-center">
                <button
                  onClick={closePopup}
                  className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white px-6 py-2 rounded-lg hover:scale-105 transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default LikeButton;
