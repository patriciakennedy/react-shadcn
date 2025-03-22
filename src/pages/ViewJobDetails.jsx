import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const ViewJobDetails = () => {
    // Get job id from the URL parameters
    const { id } = useParams();

    // State for job details
    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    // Placeholder state for application status (can be enhanced later)
    const [applicationStatus, setApplicationStatus] = useState('Not Applied');

    // Fetch job details from the backend when component mounts
    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/jobs/${id}`)
            .then((response) => {
                setJob(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching job details:', error);
                setError('Failed to load job details.');
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen bg-[#04091A] text-white flex items-center justify-center">
                Loading...
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-[#04091A] text-white flex items-center justify-center">
                {error}
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#04091A] text-white p-6">
            <div className="max-w-4xl mx-auto bg-gray-900 p-8 rounded-lg shadow-lg">
                {/* Job Title */}
                <h1 className="text-4xl font-bold mb-4">{job.title}</h1>

                {/* Company Info */}
                <div className="flex items-center gap-4 mb-6">
                    {job.companyLogo ? (
                        <img
                            src={job.companyLogo}
                            alt="Company Logo"
                            className="w-16 h-16 rounded-full object-cover"
                        />
                    ) : (
                        <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
                            <span className="text-xl">
                                {job.company.charAt(0)}
                            </span>
                        </div>
                    )}
                    <div>
                        <h2 className="text-2xl font-semibold">
                            {job.company}
                        </h2>
                        <p className="text-gray-400">{job.location}</p>
                    </div>
                </div>

                {/* Job Description */}
                <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">
                        Job Description
                    </h3>
                    <p className="text-gray-300">{job.description}</p>
                </div>

                {/* Job Requirements */}
                <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">
                        Job Requirements
                    </h3>
                    <p className="text-gray-300">{job.requirements}</p>
                </div>

                {/* Apply Button */}
                <div className="mb-6">
                    <button className="bg-gradient-to-r from-[#A259FF] to-[#6C00FF] text-white px-6 py-3 rounded-lg hover:opacity-90 transition">
                        Apply Now
                    </button>
                </div>

                {/* Application Status */}
                <div className="mb-6">
                    <h4 className="text-xl font-semibold">
                        Application Status:
                    </h4>
                    <p className="text-gray-300">{applicationStatus}</p>
                </div>

                {/* Back to Jobs Link */}
                <Link
                    to="/JobListing"
                    className="text-[#A259FF] hover:underline"
                >
                    Back to Jobs
                </Link>
            </div>
        </div>
    );
};

export default ViewJobDetails;
