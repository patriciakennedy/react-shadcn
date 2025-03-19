import React, { useState, useEffect } from 'react';
import axios from 'axios';

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

    // State for states dropdown (fetched from API)
    const [states, setStates] = useState([]);

    // State for success/error messages
    const [message, setMessage] = useState('');

    // Fetch states for location dropdown
    useEffect(() => {
        axios
            .get('http://localhost:5000/api/states')
            .then((response) => setStates(response.data))
            .catch((error) => console.error('Error fetching states:', error));
    }, []);

    // Handle text input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Handle file input change
    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            logo: e.target.files[0], // Store uploaded file
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(''); // Clear any previous messages

        // Create FormData for file upload
        const jobData = new FormData();
        jobData.append('title', formData.title);
        jobData.append('company', formData.company);
        jobData.append('location', formData.location);
        jobData.append('jobType', formData.jobType);
        jobData.append('salary', formData.salary || ''); // Allow empty salary
        jobData.append('description', formData.description);
        jobData.append('requirements', formData.requirements);
        jobData.append('applyLink', formData.applyLink || ''); // Allow empty link
        jobData.append('recruiter_id', 1); // Temporary ID (Replace with auth logic)
        if (formData.logo) jobData.append('companyLogo', formData.logo); // Attach file

        // Send data to backend
        axios
            .post('http://localhost:5000/api/jobs', jobData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            })
            .then((response) => {
                console.log('Job Posted:', response.data);
                setMessage('✅ Job posted successfully!');
                resetForm();
            })
            .catch((error) => {
                console.error('Error posting job:', error);
                setMessage('❌ Failed to post job. Try again.');
            });
    };

    // Reset form fields
    const resetForm = () => {
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
        document.getElementById('logoUpload').value = null; // Clear file input
    };

    return (
        <div className="min-h-screen bg-[#04091A] text-white flex justify-center p-6">
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-3xl">
                <h1 className="text-3xl font-bold text-center mb-4">
                    Post a Job
                </h1>
                {message && <p className="text-center mb-4">{message}</p>}{' '}
                {/* Show success/error message */}
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

                    {/* Salary (Optional) */}
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

                    {/* Job Requirements */}
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
