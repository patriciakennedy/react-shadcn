import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

const ShowcaseSections = () => {
    return (
        <section className="w-full py-12 bg-white">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* First Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                    {/* Image on the Left */}
                    <div>
                        <img
                            src="../public/devs.jpg"
                            alt="Group of People"
                            className="w-full h-auto object-cover rounded-lg"
                        />
                    </div>

                    {/* Text on the Right */}
                    <div className="flex flex-col justify-center">
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                            Let the jobs find you
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Create your free profile to get interview invites
                            and jobs that work for you.
                        </p>
                        <Link to="/JobListing">
                            <Button variant="electricBlue">Get hired</Button>
                        </Link>
                    </div>
                </div>

                {/* Second Row (Reversed) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* Text on the Left */}
                    <div className="order-2 sm:order-1 flex flex-col justify-center">
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                            Your job is personal
                        </h3>
                        <p className="text-gray-700 mb-6">
                            Tell us more about your goals and we'll match you
                            with the right jobs to help you reach them.
                        </p>
                        <Link to="/JobListing">
                            <Button variant="gradient">See Jobs</Button>
                        </Link>
                    </div>

                    {/* Image on the Right */}
                    <div className="order-1 sm:order-2">
                        <img
                            src="../public/devs.jpg"
                            alt="Individual"
                            className="w-full h-auto object-cover rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShowcaseSections;
