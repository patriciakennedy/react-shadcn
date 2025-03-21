import React, { useState, useEffect } from 'react';
import { FaHeart } from 'react-icons/fa';
import axios from 'axios';

const JobsHiringNow = () => {
    const [jobs, setJobs] = useState([]);
    const [savedJobs, setSavedJobs] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:5000/api/jobs')
            .then((response) => {
                const urgentlyHiringJobs = response.data.filter(
                    (job) => job.is_open === true
                );
                setJobs(urgentlyHiringJobs);
            })
            .catch((error) => console.error('Error fetching jobs:', error));
    }, []);

    const toggleSaveJob = (jobId) => {
        setSavedJobs((prevSavedJobs) =>
            prevSavedJobs.includes(jobId)
                ? prevSavedJobs.filter((id) => id !== jobId)
                : [...prevSavedJobs, jobId]
        );
    };

    return (
        <section className="py-16 text-white bg-[#04091A]">
            <h2 className="text-3xl font-bold text-center mb-8">
                Jobs Hiring Now
            </h2>

            {/* Grid for Job Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
                {jobs.slice(0, 4).map(
                    (
                        job // Ensuring only 4 cards display at a time
                    ) => (
                        <div
                            key={job.id}
                            className="relative bg-gray-900 p-6 rounded-xl shadow-lg w-[320px] h-[360px] flex flex-col justify-between"
                        >
                            {/* Save Job Icon */}
                            <FaHeart
                                className={`absolute top-4 right-4 cursor-pointer text-xl ${
                                    savedJobs.includes(job.id)
                                        ? 'text-red-500'
                                        : 'text-gray-400'
                                }`}
                                onClick={() => toggleSaveJob(job.id)}
                            />

                            {/* Company Logo */}
                            <img
                                src={
                                    job.company_logo || '/placeholder-logo.png'
                                }
                                alt="Company Logo"
                                className="h-14 mb-3"
                            />

                            {/* Job Details */}
                            <div className="text-left">
                                <h3 className="text-xl font-bold">
                                    {job.title}
                                </h3>
                                <p className="text-gray-400 text-sm">
                                    {job.location}
                                </p>
                            </div>

                            {/* Urgently Hiring Badge */}
                            <span className="inline-block bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
                                Urgently Hiring
                            </span>

                            {/* Apply Now Button */}
                            <button className="mt-4 w-full bg-gradient-to-r from-[#A259FF] to-[#6C00FF] text-white font-semibold py-3 rounded-md">
                                Apply Now
                            </button>
                        </div>
                    )
                )}
            </div>
        </section>
    );
};

export default JobsHiringNow;
