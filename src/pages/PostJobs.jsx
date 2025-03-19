import React, { useState, useEffect } from 'react';

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
        logo: null, // File input for company logo
    });

    const [states, setStates] = useState([]); // Store states from API

    // Fetch states from API
    useEffect(() => {
        fetch('http://localhost:5000/api/states') // Adjust API endpoint if needed
            .then((response) => response.json())
            .then((data) => setStates(data)) // Store states in state
            .catch((error) => console.error('Error fetching states:', error));
    }, []);

    // Function to handle text input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Function to handle file input change
    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            logo: e.target.files[0], // Store uploaded file
        });
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents page refresh
        console.log('Job Posted:', formData);

        // Reset the form, including clearing file input
        setFormData({
            title: '',
            company: '',
            location: '',
            jobType: '',
            salary: '',
            description: '',
            requirements: '',
            applyLink: '',
            logo: null,
        });

        // Reset file input manually
        document.getElementById('logoUpload').value = null;
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
                    <input
                        type="text"
                        name="company"
                        placeholder="Company Name"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full p-3 rounded-md text-black"
                        required
                    />

                    {/* Location Dropdown (Fetched from API) */}
                    <select
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full p-3 rounded-md text-black"
                        required
                    >
                        <option value="">Select Location</option>
                        {states.map((state) => (
                            <option key={state.id} value={state.name}>
                                {state.name}
                            </option>
                        ))}
                    </select>

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

                    {/* Salary Range (Optional, Numbers Only) */}
                    <input
                        type="number"
                        name="salary"
                        placeholder="Salary Range (e.g. 50000)"
                        value={formData.salary}
                        onChange={handleChange}
                        className="w-full p-3 rounded-md text-black"
                        min="0"
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

                    {/* Application Link (Optional) */}
                    <input
                        type="text"
                        name="applyLink"
                        placeholder="Application Link (Optional)"
                        value={formData.applyLink}
                        onChange={handleChange}
                        className="w-full p-3 rounded-md text-black"
                    />

                    {/* Upload Company Logo */}
                    <input
                        id="logoUpload"
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="w-full p-3 rounded-md text-white bg-gray-800"
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
