import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, MapPin, Building } from 'lucide-react'; // Icons

const JobCard = ({ job }) => {
    const [saved, setSaved] = useState(false); // State to track saved jobs

    // Toggle Save Job
    const handleSaveJob = () => {
        setSaved(!saved);
    };

    return (
        <div className="bg-gray-900 text-white rounded-lg shadow-md p-6 flex flex-col gap-3 transition-all hover:shadow-lg">
            {/* Company Logo */}
            <div className="flex items-center gap-3">
                {job.companyLogo ? (
                    <img
                        src={job.companyLogo}
                        alt="Company Logo"
                        className="w-12 h-12 rounded-full object-cover"
                    />
                ) : (
                    <Building size={40} className="text-gray-500" />
                )}
                <div>
                    {/* Job Title */}
                    <h2 className="text-xl font-semibold">{job.title}</h2>
                    {/* Company Name */}
                    <span className="text-gray-400 text-sm">{job.company}</span>
                </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-blue-400 text-sm">
                <MapPin size={18} />
                <span>{job.location}</span>
            </div>

            {/* Buttons */}
            <div className="flex justify-between items-center mt-4">
                {/* Save Job Button */}
                <button
                    onClick={handleSaveJob}
                    className={`p-2 rounded-full ${
                        saved ? 'text-red-500' : 'text-gray-400'
                    } transition-all`}
                >
                    <Heart size={20} fill={saved ? 'red' : 'none'} />
                </button>

                {/* View Details Button */}
                <Link
                    to={`/job/${job.id}`}
                    className="bg-gradient-to-r from-[#A259FF] to-[#6C00FF] text-white px-4 py-2 rounded-lg shadow-md"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default JobCard;
