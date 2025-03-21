import React from 'react';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
    return (
        <section
            className="relative w-full h-[80vh] bg-cover bg-center bg-no-repeat"
            style={{
                /* Replace the path below with your actual image path */
                backgroundImage: "url('../public/banner.jpeg')",
            }}
        >
            {/* Dark overlay to improve text visibility on bright images */}
            <div className="absolute inset-0 bg-black bg-opacity-40" />

            {/* Content container */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-bold mb-4">
                    Find work you'll love, fast.
                </h1>
                <p className="text-white text-base sm:text-lg mb-6 max-w-2xl">
                    Let DevHire connect you with top opportunities and amazing
                    companies in just a few easy steps.
                </p>
                <Link to="/somewhere">
                    <button className="bg-white text-purple-600 font-semibold py-2 px-6 rounded-full hover:bg-gray-200 transition">
                        Explore Now
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default HowItWorks;
