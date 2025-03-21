import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import HowItWorks from '../components/HowItWorks';
import CompaniesCarousel from '../components/companiesCarousel';
import ShowcaseSections from '../components/ShowcaseSections';
import JobsHiringNow from '../components/JobsHiringNow';

const HeroSection = () => {
    return (
        <>
            <section
                className="
        flex 
        flex-col 
        items-center 
        justify-center 
        text-center 
        w-full
        min-h-[90vh]   
        bg-[#04091A]   
        px-6
        sm:px-6 
        lg:px-8
        py-16
        sm:py-32
      "
            >
                {/* Animated Title */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="
          gradient-title 
          font-extrabold 
          text-5xl 
          sm:text-7xl 
          lg:text-8xl 
          tracking-tighter 
          py-4
          text-white
        "
                >
                    Unlock Your Next
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                        Big Opportunity
                    </span>
                </motion.h1>

                {/* Subheading / Tagline */}
                <p className="text-gray-300 sm:mt-4 text-sm sm:text-xl mb-8">
                    Browse top jobs or hire top talent to propel your career or
                    company forward.
                </p>

                {/* Call-to-Action Buttons */}
                <div className="flex gap-6 mt-10">
                    <Link to="/JobListing">
                        <Button variant="gradient" size="xl">
                            Find Jobs
                        </Button>
                    </Link>
                    <Link to="/PostJobs">
                        <Button variant="electricBlue" size="xl">
                            Post Jobs
                        </Button>
                    </Link>
                </div>
            </section>
            {/* <CompaniesCarousel /> */}
            <div className="w-screen relative left-1/2 right-1/2 -translate-x-1/2">
                <CompaniesCarousel />
            </div>
            {/* <HowItWorks /> */}
            {/* <ShowcaseSections /> */}
            <div className="w-screen relative left-1/2 right-1/2 -translate-x-1/2">
                <HowItWorks />
                <JobsHiringNow />
            </div>
        </>
    );
};

export default HeroSection;
