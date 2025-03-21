import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

const HiringStartsHere = () => {
    return (
        <section className="w-full text-center py-16 sm:py-24 bg-gradient-to-b from-white to-blue-200">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Large, bold headline matching Hero style */}
                <h2 className="text-5xl sm:text-7xl font-extrabold text-black mb-4">
                    Hiring starts here
                </h2>

                {/* Subheadline */}
                <p className="text-black text-base sm:text-lg mb-8">
                    Get started for free today.
                </p>

                {/* CTA Button */}
                <Link to="/PostJobs">
                    <Button variant="gradient" size="xl">
                        Post a job
                    </Button>
                </Link>
            </div>
        </section>
    );
};

export default HiringStartsHere;
