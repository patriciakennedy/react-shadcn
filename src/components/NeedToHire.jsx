import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';

// Example candidate data (fake, for display only)
const candidates = [
    { name: 'Megan C.', university: 'Waterloo', graduationYear: '2023' },
    { name: 'Vince A.', university: 'Harvard', graduationYear: '2022' },
    { name: 'Pamela E.', university: 'Colorado State', graduationYear: '2021' },
    { name: 'Bianca S.', university: 'Northwestern', graduationYear: '2022' },
    { name: 'Kristin W.', university: 'Occidental', graduationYear: '2022' },
];

// Duplicate the list for continuous scrolling effect
const repeatedCandidates = [...candidates, ...candidates];

const NeedToHire = () => {
    return (
        <section className="w-full bg-[#04091A] py-8 px-4 sm:px-6 lg:px-8 text-white">
            <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center gap-4">
                {/* Left Column: Heading & CTA */}
                <div className="sm:w-1/2 flex flex-col justify-center">
                    <h1 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tighter mb-2 leading-tight">
                        Need to <br />
                        Hire now?
                    </h1>
                    <p className="text-gray-300 text-sm sm:text-base mb-4 max-w-md">
                        Post your open roles on DevHire for free and reach
                        quality candidates fast.
                    </p>
                    <Link to="/PostJobs">
                        <Button variant="gradient" size="lg">
                            Post a job
                        </Button>
                    </Link>
                </div>

                {/* Right Column: Auto-Scrolling Candidate Profiles */}
                <div className="sm:w-1/2 flex justify-center sm:justify-end">
                    <div className="relative w-full max-w-sm h-48 overflow-hidden">
                        <motion.div
                            className="flex flex-col gap-2"
                            animate={{ y: ['0%', '-100%'] }}
                            transition={{
                                duration: 12,
                                repeat: Infinity,
                                ease: 'linear',
                            }}
                        >
                            {repeatedCandidates.map((candidate, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-800 rounded-lg p-4 flex items-center gap-3 shadow-lg"
                                >
                                    <div className="h-10 w-10 rounded-full bg-gray-500 flex items-center justify-center text-white font-bold text-lg">
                                        {candidate.name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="text-white font-semibold text-base sm:text-lg">
                                            {candidate.name}
                                        </p>
                                        <p className="text-gray-300 text-xs">
                                            {candidate.university},{' '}
                                            {candidate.graduationYear}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NeedToHire;
