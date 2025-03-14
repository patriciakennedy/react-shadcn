import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
// import { Button } from '../components/ui/button';
import Autoplay from 'embla-carousel-autoplay';
import companies from '../data/companies.json';
import { motion } from 'framer-motion';
// import LoginForm from './LoginForm';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from '../components/ui/carousel';

const LandingPage = () => {
    const text = 'Find Your Dream Job'.split(''); // Splits text into individual letters

    return (
        <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
            <section className="text-center ">
                <motion.h1
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="flex flex-col items-center justify-center gradient-title font-extrabold text-4xl sm:text-6xl lg:text-8xl tracking-tighter py-4"
                >
                    Unlock Your Next{' '}
                    <span className="flex items-center gap-2 sm:gap-6">
                        Big Opportunity{' '}
                    </span>
                </motion.h1>

                <p className="text-gray-300 sm:mt-4 text-xs sm:text-xl">
                    Browse top jobs or hire top talent
                </p>
            </section>
            {/* buttons */}
            <div className="flex gap-6 justify-center">
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

            {/* form component */}
            {/* <LoginForm /> */}
            {/* carousel */}
            <Carousel
                plugins={[
                    Autoplay({
                        delay: 2000,
                    }),
                ]}
                className="w-full py-10"
            >
                <CarouselContent className="flex gap-5 sm:gap-20 items-center">
                    {companies.map(({ name, id, path }) => (
                        <CarouselItem
                            key={id}
                            className="basis-1/3 lg:basis-1/6"
                        >
                            <img
                                src={path}
                                alt={name}
                                className="h-9 sm:h-14 object-contain"
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            {/* banner */}

            <section>{/* cards */}</section>

            {/* Accordion */}
        </main>
    );
};

export default LandingPage;
