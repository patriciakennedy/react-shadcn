import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="min-h-screen bg-[#04091A] text-white">
            {/* TOP PORTION (Hero + Stats) */}
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

            {/* IMAGES SECTION */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <img
                        src="/devs.jpg"
                        alt="First image"
                        className="w-full h-auto object-cover rounded-lg"
                    />
                    <img
                        src="/devs.jpg"
                        alt="Second image"
                        className="w-full h-auto object-cover rounded-lg"
                    />
                </div>
            </div>

            {/* MISSION SECTION */}
            <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <img
                    src="/devs.jpg"
                    alt="Mission Section Image"
                    className="w-full h-auto object-cover rounded-lg"
                />
                <div className="space-y-6">
                    <h5 className="text-sm uppercase text-blue-400 tracking-widest">
                        Our Mission
                    </h5>
                    <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
                        Happy people in the center of our company
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                        Vivamus quis mi. Phasellus viverra nulla ut metus varius
                        laoreet. Nunc interdum lacus sit amet orci. Sed magna
                        purus, fermentum eu, tincidunt eu, varius ut, felis.
                    </p>
                    <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                            <span className="text-green-400">✔</span>
                            <span>Donec vitae orci sed dolor</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-green-400">✔</span>
                            <span>Donec sodales sagittis magna</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-green-400">✔</span>
                            <span>
                                Nullam dictum felis eu pede mollis pretium
                            </span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* POSTING OPTIONS SECTION */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-900 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">Post free job</h3>
                    <p className="text-gray-300 mb-6">
                        Mauris sollicitudin fermentum libero. Vivamus aliquet
                        elit ac nisl. In hac habitasse platea dictumst.
                    </p>
                    <button className="bg-gradient-to-r from-[#A259FF] to-[#6C00FF] text-white px-6 py-2 rounded-md">
                        Post now
                    </button>
                </div>

                <div className="bg-blue-500 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4 text-white">
                        Post #featured job
                    </h3>
                    <p className="text-white mb-6">
                        Mauris sollicitudin fermentum libero. Vivamus aliquet
                        elit ac nisl. In hac habitasse platea dictumst.
                    </p>
                    <button className="bg-[#04091A] text-white px-6 py-2 rounded-md">
                        Post now
                    </button>
                </div>
            </div>

            {/* CONTACT OPTIONS SECTION */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                <div className="space-y-2">
                    <span className="text-blue-400 text-4xl block mx-auto">
                        📧
                    </span>
                    <h3 className="text-lg font-bold">Drop us an email</h3>
                    <p className="text-gray-300">templates@wavesdesign.io</p>
                </div>
                <div className="space-y-2">
                    <span className="text-blue-400 text-4xl block mx-auto">
                        💬
                    </span>
                    <h3 className="text-lg font-bold">WhatsApp</h3>
                    <p className="text-gray-300">+1 600 600 600</p>
                </div>
                <div className="space-y-2">
                    <span className="text-blue-400 text-4xl block mx-auto">
                        📍
                    </span>
                    <h3 className="text-lg font-bold">Find us</h3>
                    <p className="text-gray-300">Open Google Maps</p>
                </div>
            </div>

            {/* FUTURE SECTIONS */}
        </div>
    );
};

export default About;
