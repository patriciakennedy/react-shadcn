import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
// import { Button } from '../components/ui/button';

const LandingPage = () => {
    return (
        <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
            <section className="text-center ">
                <h1 className="flex flex-col items-center justify-center gradient-title gradient-title font-extrabold text-4xl sm:text-6xl lg:text-8xl tracking-tighter py-4">
                    Find You Dream Job{' '}
                    <span className="flex items-center gap-2 sm:gap-6">
                        and get{' '}
                        <img
                            src="/logo.png"
                            alt="Hirrd logo"
                            className="h-14 sm:h-24 lg:h-32"
                        />
                    </span>
                </h1>
                <p className="text-gray-300 sm:mt-4 text-xs sm:text-xl">
                    Explore thousands of job listings or find the perfect
                    candidate
                </p>
            </section>
            {/* buttons */}
            <div>
                <Link to="/JobListing">
                    <Button>Find Jobs</Button>
                </Link>
                <Link to="/PostJobs">
                    <Button>Post Jobs</Button>
                </Link>
            </div>

            {/* carousel */}
            {/* banner */}

            <section>{/* cards */}</section>

            {/* Accordion */}
        </main>
    );
};

export default LandingPage;
