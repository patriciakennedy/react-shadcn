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
        companyLogo: null, // New field for company logo
    });

    const [uploading, setUploading] = useState(false); // Track file upload status

    // Function to handle text input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Function to handle file input change (logo upload)
    const handleFileChange = (e) => {
        const file = e.target.files[0]; // Get the selected file
        setFormData({ ...formData, companyLogo: file }); // Store in state
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page refresh
        setUploading(true);

        // Create a FormData object (for file uploads)
        const jobData = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            jobData.append(key, value);
        });

        // Send data to the backend
        fetch('http://localhost:5000/api/jobs', {
            method: 'POST',
            body: jobData, // FormData object (allows file upload)
        })
            .then((response) => response.json())
            .then((data) => {
                setUploading(false);
                console.log('Job Posted:', data);
                alert('Job posted successfully!'); // Success feedback
                setFormData({
                    title: '',
                    company: '',
                    location: '',
                    jobType: '',
                    salary: '',
                    description: '',
                    requirements: '',
                    applyLink: '',
                    companyLogo: null,
                }); // Reset form
            })
            .catch((error) => {
                setUploading(false);
                console.error('Error posting job:', error);
                alert('Error posting job. Please try again.');
            });
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

                    {/* Company Logo Upload */}
                    <input
                        type="file"
                        name="companyLogo"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="w-full p-3 rounded-md text-black bg-white"
                    />

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full p-3 bg-gradient-to-r from-[#A259FF] to-[#6C00FF] text-white rounded-md"
                        disabled={uploading}
                    >
                        {uploading ? 'Uploading...' : 'Post Job'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PostJobs;
