import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollZoomSection = () => {
    // Track the overall scroll progress (0 at the top, 1 at the bottom)
    const { scrollYProgress } = useScroll();

    // Map the scroll progress to a scale range (1 -> 1.2)
    // Feel free to adjust [1, 1.2] to achieve your desired zoom.
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

    return (
        <section
            className="
        relative 
        min-h-screen 
        bg-gradient-to-b 
        from-[#A259FF] 
        to-[#6C00FF]
        flex 
        flex-col 
        items-center 
        justify-center 
        text-center 
        px-4 
        sm:px-6 
        lg:px-8
      "
        >
            {/* Headline */}
            <h1
                className="
          font-extrabold
          text-4xl 
          sm:text-5xl 
          md:text-6xl 
          lg:text-7xl 
          tracking-tight 
          text-white
          mb-4
        "
            >
                Do You Really Know Where <br className="hidden sm:block" />
                Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200">
                    Skills Gaps
                </span>{' '}
                Are?
            </h1>

            {/* Subheading */}
            <p className="text-white text-base sm:text-lg max-w-2xl mb-8">
                Put skills intelligence to work with the AI platform that
                connects workforce strategy and day-to-day execution—aligning
                your organization toward success.
            </p>

            {/* CTA Button */}
            <button
                className="
          bg-white 
          text-purple-600 
          font-semibold 
          py-2 
          px-6 
          rounded-full 
          hover:bg-gray-200 
          transition
          mb-16
        "
            >
                Book a demo
            </button>

            {/* Motion Image with scroll-based zoom */}
            <div className="relative w-full max-w-4xl">
                <motion.img
                    style={{ scale }}
                    src="../public/devs.jpg"
                    alt="Skills Gap Illustration"
                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
            </div>
        </section>
    );
};

export default ScrollZoomSection;
