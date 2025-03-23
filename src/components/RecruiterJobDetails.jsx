import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RecruiterJobDetails = () => {
    // Dummy data for visual design (no backend calls).
    const [job] = useState({
        id: 1,
        title: 'Senior Backend Engineer',
        company: 'DevHire Inc.',
        companyLogo: '', // or a URL string if you want to test an image
        location: 'Remote',
        description:
            'This is a sample job description tailored for a Recruiter context. It outlines the main responsibilities and tasks for the role, along with key objectives and goals.',
        requirements:
            '• 5+ years of experience in Node.js\n• Proficiency with Express\n• Excellent communication skills\n• Ability to mentor junior developers',
    });

    // For design only, we won't actually delete or edit anything.
    const handleDelete = () => {
        alert('Delete Job clicked! (For design only)');
    };

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
                                {job.company ? job.company.charAt(0) : 'C'}
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
                    <p className="text-gray-300 whitespace-pre-line">
                        {job.description}
                    </p>
                </div>

                {/* Job Requirements */}
                <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-2">
                        Job Requirements
                    </h3>
                    <p className="text-gray-300 whitespace-pre-line">
                        {job.requirements}
                    </p>
                </div>

                {/* Recruiter Management Actions */}
                <div className="flex gap-4 mb-6">
                    {/* For design only, no actual edit page */}
                    <button
                        onClick={() =>
                            alert('Edit Job clicked! (For design only)')
                        }
                        className="bg-gradient-to-r from-[#A259FF] to-[#6C00FF] text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
                    >
                        Edit Job
                    </button>
                    <button
                        onClick={handleDelete}
                        className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-500 transition"
                    >
                        Delete Job
                    </button>
                </div>

                {/* Back to Dashboard Link */}
                <Link
                    to="/recruiter-dashboard"
                    className="text-[#A259FF] hover:underline"
                >
                    Back to Dashboard
                </Link>
            </div>
        </div>
    );
};

export default RecruiterJobDetails;
