import React from 'react';

const WhyDevHireTall = () => {
    // Example dummy data for the scrolling cards
    const features = [
        {
            title: 'Future of Job Hunting',
            text: 'Say goodbye to the traditional job search process and step into the future of employment opportunities.',
        },
        {
            title: 'Embracing Technology',
            text: 'Leverage cutting-edge tools for upskilling and staying relevant in a competitive job market.',
        },
        {
            title: 'Be Unique',
            text: 'Craft a profile that effectively showcases your unique skills, notable accomplishments, and career aspirations.',
        },
    ];

    return (
        <div className="bg-[#04091A] text-white py-20 px-4 sm:px-6 lg:px-8">
            {/* Outer container with a fixed height on medium screens and above */}
            <div className="max-w-9xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch md:h-[600px]">
                {/* Left Column */}
                <div className="flex flex-col justify-center space-y-4 h-full">
                    <h5 className="text-sm uppercase text-purple-400 tracking-widest">
                        NEW WAY TO GET A JOB
                    </h5>
                    <h2 className="text-4xl sm:text-5xl font-extrabold">
                        Why DevHire?
                    </h2>
                    <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                        Upon entering the DevHire platform, your first step is
                        to input your ideal team positions or roles. Let our
                        technology do the rest.
                    </p>
                </div>

                {/* Right Column with horizontal scrolling cards */}
                <div className="h-full flex">
                    <div className="flex space-x-6 overflow-x-auto snap-x snap-mandatory scroll-smooth w-full h-full items-stretch">
                        {features.map((feature, idx) => (
                            <div
                                key={idx}
                                className="snap-center min-w-[260px] bg-gray-900 p-6 rounded-lg shadow-md h-full flex flex-col justify-between"
                            >
                                <h3 className="text-xl font-semibold mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400">{feature.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyDevHireTall;
