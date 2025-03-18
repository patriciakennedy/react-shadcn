import React from 'react';

const JobListing = () => {
    return (
        <div className="min-h-screen bg-[#04091A] text-white p-6">
            {/* Page Title */}
            <h1 className="text-4xl font-bold text-center mb-6">Latest Jobs</h1>

            {/* Search & Filters Section */}
            <div className="mb-6 flex flex-col sm:flex-row gap-4 justify-center">
                <input
                    type="text"
                    placeholder="Search jobs by title..."
                    className="p-3 rounded-md text-black w-full sm:w-1/3"
                />
                <select className="p-3 rounded-md text-black w-full sm:w-1/4">
                    <option value="">Filter by Location</option>
                </select>
                <select className="p-3 rounded-md text-black w-full sm:w-1/4">
                    <option value="">Filter by Company</option>
                </select>
                <button className="p-3 bg-red-500 hover:bg-red-700 rounded-md">
                    Clear Filters
                </button>
            </div>

            {/* Job Listings Section */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Job Cards will go here */}
            </div>
        </div>
    );
};

export default JobListing;
