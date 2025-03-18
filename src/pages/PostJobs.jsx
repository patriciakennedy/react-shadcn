import React, { useState } from 'react';

const PostJobs = () => {
    // State for form fields
    const [formData, setFormData] = useState({
        title: '',
        company: '',
        location: '',
        jobType: '',
        salary: '',
        description: '',
        requirements: '',
        applyLink: '',
    });

    // Function to handle input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents page refresh
        console.log('Job Posted:', formData);
        // Step 2: Send data to backend (to be implemented later)
    };

    return (
        <div className="min-h-screen bg-[#04091A] text-white flex justify-center p-6">
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-3xl">
                <h1 className="text-3xl font-bold text-center mb-6">
                    Post a Job
                </h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Job Title */}
                    <input
                        type="text"
                        name="title"
                        placeholder="Job Title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full p-3 rounded-md text-black"
                        required
                    />

                    {/* Company Name */}
                    <select
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full p-3 rounded-md text-black"
                        required
                    >
                        <option value="">Select Company</option>
                        <option value="Company A">Company A</option>
                        <option value="Company B">Company B</option>
                    </select>

                    {/* Location */}
                    <input
                        type="text"
                        name="location"
                        placeholder="Location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full p-3 rounded-md text-black"
                        required
                    />

                    {/* Job Type */}
                    <select
                        name="jobType"
                        value={formData.jobType}
                        onChange={handleChange}
                        className="w-full p-3 rounded-md text-black"
                        required
                    >
                        <option value="">Select Job Type</option>
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Contract">Contract</option>
                    </select>

                    {/* Salary */}
                    <input
                        type="text"
                        name="salary"
                        placeholder="Salary Range (e.g. $50k - $80k)"
                        value={formData.salary}
                        onChange={handleChange}
                        className="w-full p-3 rounded-md text-black"
                        required
                    />

                    {/* Job Description */}
                    <textarea
                        name="description"
                        placeholder="Job Description"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full p-3 rounded-md text-black"
                        rows="4"
                        required
                    ></textarea>

                    {/* Requirements */}
                    <textarea
                        name="requirements"
                        placeholder="Job Requirements"
                        value={formData.requirements}
                        onChange={handleChange}
                        className="w-full p-3 rounded-md text-black"
                        rows="4"
                        required
                    ></textarea>

                    {/* Application Link */}
                    <input
                        type="text"
                        name="applyLink"
                        placeholder="Application Link"
                        value={formData.applyLink}
                        onChange={handleChange}
                        className="w-full p-3 rounded-md text-black"
                        required
                    />

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full p-3 bg-gradient-to-r from-[#A259FF] to-[#6C00FF] text-white rounded-md"
                    >
                        Post Job
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PostJobs;
