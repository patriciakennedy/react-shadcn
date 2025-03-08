import React from 'react';

const LandingRedesign = () => {
    return (
        <main className="flex flex-col md:flex-row items-center justify-between min-h-screen px-6 sm:px-12">
            {/* Left Section: Headline & CTA */}
            <div className="md:w-1/2 text-center md:text-left">
                <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">
                    Land Your Dream Developer Job 🚀
                </h1>
                <p className="mt-4 text-lg text-gray-300">
                    Find top tech jobs that match your skills and passion.
                </p>
                <div className="mt-6 flex gap-4 justify-center md:justify-start">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-bold">
                        Find Jobs
                    </button>
                    <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md font-bold">
                        Post Jobs
                    </button>
                </div>
            </div>

            {/* Right Section: Developer Image */}
            <div className="md:w-1/2 flex justify-center">
                <img
                    src="/img.png"
                    alt="Excited Software Developer"
                    className="w-full max-w-md md:max-w-lg rounded-lg shadow-lg"
                />
            </div>
        </main>
    );
};

export default LandingRedesign;
