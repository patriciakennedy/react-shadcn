import React, { useState, useEffect } from 'react';
import JobCard from '../components/ui/JobCard';

const JobListing = () => {
    const [jobs, setJobs] = useState([]); // Store jobs
    const [states, setStates] = useState([]); // Store states from API
    const [searchQuery, setSearchQuery] = useState('');
    const [location, setLocation] = useState('');
    const [company, setCompany] = useState('');

    // Fetch Jobs from API
    useEffect(() => {
        fetch('http://localhost:5000/api/jobs') // Adjust API endpoint if needed
            .then((response) => response.json())
            .then((data) => {
                setJobs(data);
                console.log('Jobs fetched:', data);
            })
            .catch((error) => {
                console.error('Error fetching jobs:', error);
            });
    }, []);

    // Fetch States from API
    useEffect(() => {
        fetch('http://localhost:5000/api/states') // API to fetch states
            .then((response) => response.json())
            .then((data) => {
                setStates(data); // Store states in state
                console.log('States fetched:', data);
            })
            .catch((error) => {
                console.error('Error fetching states:', error);
            });
    }, []);

    // Filter & Search Function
    const filteredJobs = jobs.filter(
        (job) =>
            job.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
            (location === '' || job.location === location) &&
            (company === '' || job.company_name === company)
    );

    return (
        <div className="min-h-screen bg-[#04091A] text-white p-6">
            {/* Page Title */}
            <h1 className="text-4xl font-bold text-center mb-6">Latest Jobs</h1>

            {/* Search & Filters Section */}
            <div className="mb-6 flex flex-col sm:flex-row gap-4 justify-center">
                {/* Search Input */}
                <input
                    type="text"
                    placeholder="Search jobs by title..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="p-3 rounded-md text-black w-full sm:w-1/3"
                />

                {/* Location Dropdown (Fetched from API) */}
                <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="p-3 rounded-md text-black w-full sm:w-1/4"
                >
                    <option value="">Filter by Location</option>
                    {states.map((state) => (
                        <option key={state.id} value={state.name}>
                            {state.name}
                        </option>
                    ))}
                </select>

                {/* Company Dropdown (Static for now, will fetch from API later) */}
                <select
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="p-3 rounded-md text-black w-full sm:w-1/4"
                >
                    <option value="">Filter by Company</option>
                    <option value="Company A">Company A</option>
                    <option value="Company B">Company B</option>
                </select>

                {/* Clear Filters Button */}
                <button
                    onClick={() => {
                        setSearchQuery('');
                        setLocation('');
                        setCompany('');
                    }}
                    className="p-3 bg-gradient-to-r from-[#A259FF] to-[#6C00FF] text-white rounded-md"
                >
                    Clear Filters
                </button>
            </div>

            {/* Job Listings Section */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredJobs.length > 0 ? (
                    filteredJobs.map((job) => (
                        <JobCard key={job.id} job={job} />
                    ))
                ) : (
                    <p className="text-center text-gray-400">No jobs found.</p>
                )}
            </div>
        </div>
    );
};

export default JobListing;
