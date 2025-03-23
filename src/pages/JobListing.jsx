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
            {/* TOP SECTION (Intro) */}
            <div className="max-w-9xl mx-auto py-20 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div className="space-y-4">
                    <h5 className="text-sm uppercase text-purple-400 tracking-widest">
                        CURRENT JOBS
                    </h5>
                    <h2 className="text-4xl sm:text-5xl font-extrabold">
                        Find the perfect jobs that you deserve
                    </h2>
                </div>
                <div>
                    <p className="text-gray-300 text-xl sm:text-2xl leading-relaxed">
                        We constantly seek driven individuals who possess a
                        strong commitment to creating an impact and aspire to be
                        integral members of a vibrant and forward-thinking
                        group.
                    </p>
                </div>
            </div>

            {/* HORIZONTAL LINE DIVIDER */}
            <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
                <hr className="border-t border-gray-700 my-10" />
            </div>

            {/* PAGE TITLE */}
            <h1 className="text-4xl font-bold text-center mb-4">Latest Jobs</h1>

            {/* RESULTS COUNT */}
            <p className="text-center text-gray-400 mb-6">
                {filteredJobs.length} job{filteredJobs.length !== 1 && 's'}{' '}
                found
            </p>

            {/* SEARCH & FILTERS SECTION */}
            <div className="mb-6 flex flex-col sm:flex-row gap-4 justify-center">
                <input
                    type="text"
                    placeholder="Search jobs by title..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="p-3 rounded-md text-black w-full sm:w-1/3 bg-gray-200"
                />
                <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="p-3 rounded-md text-black w-full sm:w-1/4 bg-gray-200"
                >
                    <option value="">Filter by Location</option>
                    {states.map((state) => (
                        <option key={state.id} value={state.name}>
                            {state.name}
                        </option>
                    ))}
                </select>
                <select
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="p-3 rounded-md text-black w-full sm:w-1/4 bg-gray-200"
                >
                    <option value="">Filter by Company</option>
                    <option value="Company A">Company A</option>
                    <option value="Company B">Company B</option>
                </select>
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

            {/* JOB LISTINGS SECTION */}
            <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredJobs.length > 0 ? (
                        filteredJobs.map((job) => (
                            <JobCard key={job.id} job={job} />
                        ))
                    ) : (
                        <p className="text-center text-gray-400">
                            No jobs found.
                        </p>
                    )}
                </div>
            </div>
            <p>test</p>
            
        </div>
    );
};

export default JobListing;
