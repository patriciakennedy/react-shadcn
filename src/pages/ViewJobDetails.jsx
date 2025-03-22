import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

// Dummy job data for layout testing
const dummyJob = {
    title: 'Software Engineer',
    company: 'DevHire Inc.',
    companyLogo: null,
    location: 'San Francisco, CA',
    description:
        'This is a sample job description for testing the UI layout. It gives an overview of the role and responsibilities.',
    requirements:
        '• Proficiency in JavaScript, React, Node.js, and Express\n• Strong problem-solving skills\n• Excellent communication skills',
};

const ViewJobDetails = () => {
    // Use dummy data for testing layout
    const { id } = useParams();
    const jobId = id || '1';

    const [job] = useState(dummyJob);
    const [applicationStatus, setApplicationStatus] = useState('Not Applied');

    // Drawer state for application form
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    // Application form fields
    const [yearsOfExperience, setYearsOfExperience] = useState('');
    const [skills, setSkills] = useState('');
    const [resume, setResume] = useState(null);
    const [educationLevel, setEducationLevel] = useState('');
    const [submitMessage, setSubmitMessage] = useState('');

    // Toggle drawer
    const handleToggleDrawer = () => {
        if (!isDrawerOpen) {
            // Reset form fields when opening the drawer
            setYearsOfExperience('');
            setSkills('');
            setResume(null);
            setEducationLevel('');
            setSubmitMessage('');
        }
        setIsDrawerOpen(!isDrawerOpen);
    };

    // Handle form submission
    const handleApply = (e) => {
        e.preventDefault();
        setApplicationStatus('Application Submitted');
        setSubmitMessage('Application successfully submitted!');
    };

    // Cancel the application (close drawer)
    const handleCancel = () => {
        setIsDrawerOpen(false);
    };

    return (
        <div className="min-h-screen bg-[#04091A] text-white p-6">
            <div className="max-w-6xl mx-auto bg-gray-900 p-8 rounded-lg shadow-lg">
                {/* Top Section: Job Title & Back Link */}
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl sm:text-4xl font-bold">
                        {job.title}
                    </h1>
                    <Link
                        to="/JobListing"
                        className="text-[#A259FF] hover:underline text-sm sm:text-base"
                    >
                        Back to Jobs
                    </Link>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Left Column: Company Overview & Apply */}
                    <div className="space-y-6">
                        {/* Company Info */}
                        <div className="flex items-center gap-4">
                            {job.companyLogo ? (
                                <img
                                    src={job.companyLogo}
                                    alt="Company Logo"
                                    className="w-16 h-16 rounded-full object-cover"
                                />
                            ) : (
                                <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
                                    <span className="text-xl">
                                        {job.company
                                            ? job.company.charAt(0)
                                            : 'C'}
                                    </span>
                                </div>
                            )}
                            <div>
                                <h2 className="text-xl font-semibold">
                                    {job.company}
                                </h2>
                                <p className="text-gray-400 text-sm">
                                    {job.location}
                                </p>
                            </div>
                        </div>

                        {/* Apply Button */}
                        <div>
                            <button
                                onClick={handleToggleDrawer}
                                className="bg-gradient-to-r from-[#A259FF] to-[#6C00FF] text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
                            >
                                {isDrawerOpen ? 'Close' : 'Apply Now'}
                            </button>
                        </div>

                        {/* Application Status */}
                        <div>
                            <h4 className="text-lg font-semibold mb-1">
                                Application Status:
                            </h4>
                            <p className="text-gray-300">{applicationStatus}</p>
                        </div>
                    </div>

                    {/* Right Column: Description & Requirements */}
                    <div className="space-y-8">
                        {/* Job Description */}
                        <div>
                            <h3 className="text-xl font-semibold mb-2">
                                Job Description
                            </h3>
                            <p className="text-gray-300 whitespace-pre-line">
                                {job.description}
                            </p>
                        </div>

                        {/* Job Requirements */}
                        <div>
                            <h3 className="text-xl font-semibold mb-2">
                                Job Requirements
                            </h3>
                            <p className="text-gray-300 whitespace-pre-line">
                                {job.requirements}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Drawer (Application Form) */}
            {isDrawerOpen && (
                <div className="mt-6 max-w-6xl mx-auto bg-gray-900 p-6 rounded-lg shadow-lg transition-all">
                    <h2 className="text-2xl font-bold mb-4">
                        Apply for {job.title}
                    </h2>

                    {submitMessage && (
                        <div className="mb-4 text-sm text-white bg-[#6C00FF] p-2 rounded">
                            {submitMessage}
                        </div>
                    )}

                    <form onSubmit={handleApply} className="space-y-4">
                        {/* Years of Experience */}
                        <div>
                            <label
                                className="block mb-1 text-gray-300"
                                htmlFor="experience"
                            >
                                Years of Experience
                            </label>
                            <input
                                id="experience"
                                type="number"
                                min="0"
                                className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600 border-none"
                                value={yearsOfExperience}
                                onChange={(e) =>
                                    setYearsOfExperience(e.target.value)
                                }
                                placeholder="e.g., 3"
                            />
                        </div>

                        {/* Skills */}
                        <div>
                            <label
                                className="block mb-1 text-gray-300"
                                htmlFor="skills"
                            >
                                Skills (comma separated)
                            </label>
                            <input
                                id="skills"
                                type="text"
                                className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600 border-none"
                                value={skills}
                                onChange={(e) => setSkills(e.target.value)}
                                placeholder="e.g., React, Node.js, Express"
                            />
                        </div>

                        {/* Education Level */}
                        <div>
                            <label
                                className="block mb-1 text-gray-300"
                                htmlFor="education"
                            >
                                Education Level
                            </label>
                            <select
                                id="education"
                                className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600 border-none"
                                value={educationLevel}
                                onChange={(e) =>
                                    setEducationLevel(e.target.value)
                                }
                            >
                                <option value="">Select Education Level</option>
                                <option value="High School">High School</option>
                                <option value="Bachelors">Bachelor's</option>
                                <option value="Masters">Master's</option>
                                <option value="PhD">PhD</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        {/* Resume Upload */}
                        <div>
                            <label
                                className="block mb-1 text-gray-300"
                                htmlFor="resume"
                            >
                                Upload Resume
                            </label>
                            <input
                                id="resume"
                                type="file"
                                accept=".pdf,.doc,.docx"
                                className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600 border-none file:bg-gray-700 file:text-white file:px-4 file:py-2 file:rounded file:mr-4"
                                onChange={(e) => setResume(e.target.files[0])}
                            />
                        </div>

                        {/* Buttons */}
                        <div className="flex justify-end gap-4 mt-4">
                            <button
                                type="button"
                                onClick={handleCancel}
                                className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-[#A259FF] to-[#6C00FF] text-white px-4 py-2 rounded hover:opacity-90 transition"
                            >
                                Submit Application
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default ViewJobDetails;
