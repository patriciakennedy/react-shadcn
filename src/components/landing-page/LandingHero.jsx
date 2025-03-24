import React from 'react';

const LandingHeroPro = () => {
    return (
        <section className="relative w-full bg-[#04091A] text-white">
            {/* Background Overlay with Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-transparent to-[#04091A] opacity-80 pointer-events-none"></div>

            {/* Hero Content Wrapper */}
            <div className="relative z-10 max-w-9xl mx-auto h-[90vh] flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 lg:px-8">
                {/* Left Column: Text Content */}
                <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6 md:space-y-8 md:pr-8">
                    <h5 className="text-sm uppercase text-purple-300 tracking-widest">
                        Job Vacancy
                    </h5>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
                        Discover the Best Job
                    </h1>
                    <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
                        Start your career with top companies around the globe.
                        We ensure you get the best opportunities possible,
                        tailored to your skills and aspirations.
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-300 text-base md:text-lg">
                        <li>Personalized Recommendations</li>
                        <li>Expanded Job Opportunities</li>
                        <li>Transparency &amp; Authenticity</li>
                    </ul>
                    <button className="mt-4 w-48 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-md font-semibold hover:opacity-90 transition">
                        Learn More
                    </button>
                </div>

                {/* Right Column: Image */}
                <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center items-center">
                    <div className="relative w-full max-w-md h-auto overflow-hidden rounded-lg shadow-xl">
                        <img
                            src="/images/hero-suitman.jpg"
                            alt="Man in Suit"
                            className="w-full h-auto object-cover"
                        />
                        {/* Optional floating icons or overlay elements */}
                        <div className="absolute top-4 left-4 w-10 h-10 bg-gray-800 bg-opacity-60 flex items-center justify-center rounded-full">
                            <img
                                src="/images/icon-video.png"
                                alt="Video Icon"
                                className="w-6 h-6"
                            />
                        </div>
                        <div className="absolute bottom-4 right-4 w-10 h-10 bg-gray-800 bg-opacity-60 flex items-center justify-center rounded-full">
                            <img
                                src="/images/icon-flash.png"
                                alt="Flash Icon"
                                className="w-6 h-6"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LandingHeroPro;
