import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Trash2 } from 'lucide-react'; // Trash icon for deletion

const RecruiterDashboard = () => {
    // Dummy data for posted jobs
    const [jobs, setJobs] = useState([]);

    // Dummy metrics for the overview
    const [totalJobs, setTotalJobs] = useState(0);
    const [totalApplications, setTotalApplications] = useState(0);

    // Simulate fetching data on mount
    useEffect(() => {
        const dummyJobs = [
            {
                id: 1,
                title: 'Software Engineer',
                company: 'DevHire Inc.',
                location: 'San Francisco, CA',
                status: 'Open',
                applications: 15,
                postedDate: '2023-03-15',
            },
            {
                id: 2,
                title: 'Frontend Developer',
                company: 'Tech Corp',
                location: 'New York, NY',
                status: 'Interviewing',
                applications: 10,
                postedDate: '2023-03-10',
            },
            {
                id: 3,
                title: 'Backend Developer',
                company: 'Innovate LLC',
                location: 'Austin, TX',
                status: 'Closed',
                applications: 8,
                postedDate: '2023-02-28',
            },
        ];
        setJobs(dummyJobs);
        setTotalJobs(dummyJobs.length);
        const totalApps = dummyJobs.reduce(
            (sum, job) => sum + job.applications,
            0
        );
        setTotalApplications(totalApps);
    }, []);

    // Function to handle status updates
    const handleStatusChange = (jobId, newStatus) => {
        // In a real app, you'd call your API to update the status.
        // For now, update the local state.
        const updatedJobs = jobs.map((job) =>
            job.id === jobId ? { ...job, status: newStatus } : job
        );
        setJobs(updatedJobs);
    };

    // Function to handle job deletion
    const handleDelete = (jobId) => {
        if (window.confirm('Are you sure you want to delete this job?')) {
            // In a real app, you'd call your API to delete the job.
            // For now, update the local state.
            const updatedJobs = jobs.filter((job) => job.id !== jobId);
            setJobs(updatedJobs);
            setTotalJobs(updatedJobs.length);
            const totalApps = updatedJobs.reduce(
                (sum, job) => sum + job.applications,
                0
            );
            setTotalApplications(totalApps);
        }
    };

    return (
        <div className="min-h-screen bg-[#04091A] text-white p-6">
            {/* Page Header */}
            <h1 className="text-4xl font-bold text-center mb-8">
                Recruiter Dashboard
            </h1>

            {/* Summary Metrics */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-gray-900 rounded-lg p-6 shadow-md text-center">
                    <h2 className="text-2xl font-bold mb-2">{totalJobs}</h2>
                    <p className="text-gray-400">Jobs Posted</p>
                </div>
                <div className="bg-gray-900 rounded-lg p-6 shadow-md text-center">
                    <h2 className="text-2xl font-bold mb-2">
                        {totalApplications}
                    </h2>
                    <p className="text-gray-400">Total Applications</p>
                </div>
                <div className="bg-gray-900 rounded-lg p-6 shadow-md text-center">
                    <h2 className="text-2xl font-bold mb-2">Updated Soon</h2>
                    <p className="text-gray-400">Recent Activity</p>
                </div>
            </div>

            {/* Job Listings Section */}
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-4">Your Job Postings</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {jobs.length > 0 ? (
                        jobs.map((job) => (
                            <div
                                key={job.id}
                                className="bg-gray-900 rounded-lg shadow-md p-6 flex flex-col gap-3 transition-all hover:shadow-lg"
                            >
                                {/* Job Title & Basic Info */}
                                <div>
                                    <h3 className="text-xl font-semibold">
                                        {job.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm">
                                        {job.company} - {job.location}
                                    </p>
                                </div>

                                {/* Status Update */}
                                <div className="flex items-center gap-2">
                                    <label className="text-gray-300 text-sm font-semibold">
                                        Status:
                                    </label>
                                    <select
                                        value={job.status}
                                        onChange={(e) =>
                                            handleStatusChange(
                                                job.id,
                                                e.target.value
                                            )
                                        }
                                        className="bg-gray-800 text-white p-1 rounded text-sm focus:outline-none"
                                    >
                                        <option value="Open">Open</option>
                                        <option value="Interviewing">
                                            Interviewing
                                        </option>
                                        <option value="Closed">Closed</option>
                                    </select>
                                </div>

                                {/* Applications */}
                                <div>
                                    <p className="text-gray-300 text-sm">
                                        <span className="font-semibold">
                                            Applications:
                                        </span>{' '}
                                        {job.applications}
                                    </p>
                                </div>

                                {/* Quick Actions */}
                                <div className="mt-auto flex justify-between items-center">
                                    {/* Updated View Details Link for Recruiters */}
                                    <Link
                                        to={`/recruiter/job/${job.id}`}
                                        className="bg-gradient-to-r from-[#A259FF] to-[#6C00FF] text-white px-4 py-2 rounded-lg shadow-md inline-block hover:opacity-90 transition"
                                    >
                                        View Details
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(job.id)}
                                        className="p-2 rounded-full text-red-500 hover:bg-red-500 hover:text-white transition"
                                    >
                                        <Trash2 size={20} />
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-400">
                            No job postings found.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RecruiterDashboard;
