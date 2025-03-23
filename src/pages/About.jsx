import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="min-h-screen bg-[#04091A] text-white">
            {/* Top Portion (Hero + Stats) */}
            <div className="py-20 px-4 sm:px-6 lg:px-8 text-center relative">
                <motion.h1
                    className="text-4xl sm:text-5xl font-extrabold mb-20"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Taking recruiting to the next level
                </motion.h1>

                <motion.p
                    className="text-gray-300 text-lg sm:text-xl mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    Changing digital landscape since 2021
                </motion.p>

                {/* Stats Row */}
                <motion.div
                    className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-4xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    <div>
                        <h2 className="text-3xl font-bold mb-1">200k+</h2>
                        <p className="text-gray-400 text-sm">jobs found</p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-1">2012</h2>
                        <p className="text-gray-400 text-sm">Founding year</p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-1">100+</h2>
                        <p className="text-gray-400 text-sm">companies</p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-1">1</h2>
                        <p className="text-gray-400 text-sm">mission</p>
                    </div>
                </motion.div>
            </div>

            {/* Additional About Content Goes Here */}
            {/* Images Section */}
            <div
                className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10"
                /* 
    max-w-6xl: Restricts the container width to a max of ~72rem (keeps images centered)
    mx-auto: Centers the container horizontally
    px-4 sm:px-6 lg:px-8: Horizontal padding at different breakpoints
    py-10: Vertical padding (adjust this to increase or decrease top/bottom space)
  */
            >
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                    /* 
      grid-cols-1: On very small screens, images stack in a single column
      sm:grid-cols-2: On small screens (>=640px), display images side by side in two columns
      gap-6: Space between the two images
    */
                >
                    <img
                        src="/devs.jpg"
                        alt="First image"
                        className="w-full h-auto object-cover rounded-lg"
                        /* 
        w-full: Image takes full width of its parent container
        h-auto: Height adjusts automatically to maintain aspect ratio
        object-cover: Ensures the image fills its box while cropping edges if needed
        rounded-lg: Slightly rounded corners (remove if you want square corners)
      */
                    />
                    <img
                        src="/devs.jpg"
                        alt="Second image"
                        className="w-full h-auto object-cover rounded-lg"
                        /* 
        Same styling as the first image for consistency
      */
                    />
                </div>
            </div>

            {/* e.g., Our Story, Our Vision, etc. */}
        </div>
    );
};

export default About;
