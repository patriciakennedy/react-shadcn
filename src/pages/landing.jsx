import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
// import Autoplay from 'embla-carousel-autoplay';
// import companies from '../data/companies.json';
import { motion } from 'framer-motion';

// import {
//     Carousel,
//     CarouselContent,
//     CarouselItem,
// } from '../components/ui/carousel';
import HowItWorks from '../components/HowItWorks';

const LandingPage = () => {
    return (
        // Remove container or max-w classes
        <>
            <main className="px-4 sm:px-6 lg:px-8 py-10 sm:py-20">
                <section className="text-center mb-12 sm:mb-20">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="gradient-title font-extrabold text-4xl sm:text-6xl lg:text-8xl tracking-tighter py-4"
                    >
                        Unlock Your Next
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                            Big Opportunity
                        </span>
                    </motion.h1>
                    <p className="text-gray-700 sm:mt-4 text-sm sm:text-xl">
                        Browse top jobs or hire top talent to propel your career
                        or company forward.
                    </p>
                </section>

                <div className="flex gap-6 justify-center mb-12">
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
                {/* //////////////////////////////////////////////////////////////Carousel Starts Here */}
              
                {/* //////////////////////////////////////////////////////////////Carousel Ends Here */}
               
            </main>
            
            <HowItWorks />
            
        </>
    );
};

export default LandingPage;
