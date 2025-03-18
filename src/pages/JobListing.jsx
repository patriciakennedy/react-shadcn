import { useState, useEffect } from 'react';
import axios from 'axios';
import JobCard from '../components/ui/JobCard';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

const JobListing = () => {
    const [jobs, setJobs] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(false);

    // Fetch jobs from the backend
    useEffect(() => {
        setLoading(true);
        axios
            .get('/api/jobs')
            .then((response) => {
                setJobs(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching jobs:', error);
                setLoading(false);
            });
    }, []);

    // Handle search input change
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    // Filter jobs based on search input
    const filteredJobs = jobs.filter((job) =>
        job.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen py-10 px-4 md:px-16 bg-[#04091A] text-white">
            <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-8">
                Find Your Dream Job
            </h1>

            {/* Search Input */}
            <div className="max-w-xl mx-auto flex gap-2">
                <Input
                    type="text"
                    placeholder="Search for jobs..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="w-full p-3 text-black rounded-md"
                />
                <Button className="bg-gradient-to-r from-[#A259FF] to-[#6C00FF] text-white px-6">
                    Search
                </Button>
            </div>

            {/* Loader */}
            {loading && (
                <p className="text-center text-gray-400 mt-6">
                    Loading jobs...
                </p>
            )}

            {/* Job Listings Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {filteredJobs.length > 0 ? (
                    filteredJobs.map((job) => (
                        <JobCard key={job.id} job={job} />
                    ))
                ) : (
                    <p className="text-center col-span-full text-gray-400">
                        No jobs found.
                    </p>
                )}
            </div>
        </div>
    );
};

export default JobListing;
