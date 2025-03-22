import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import {
    Briefcase,
    Building,
    MapPin,
    DollarSign,
    AlignLeft,
    ClipboardList,
    Globe,
    UploadCloud,
} from 'lucide-react';

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
        logo: null,
    });

    // State for states dropdown
    const [states, setStates] = useState([]);
    const [message, setMessage] = useState('');

    // Fetch states
    useEffect(() => {
        axios
            .get('http://localhost:5000/api/states')
            .then((response) => setStates(response.data))
            .catch((error) => console.error('Error fetching states:', error));
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, logo: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage('');

        const jobData = new FormData();
        jobData.append('title', formData.title);
        jobData.append('company_id', 1);
        jobData.append('location', formData.location);
        jobData.append('jobType', formData.jobType);
        jobData.append('salary', formData.salary || '');
        jobData.append('description', formData.description);
        jobData.append('requirements', formData.requirements);
        jobData.append('applyLink', formData.applyLink || '');
        jobData.append('recruiter_id', 1); // temporary
        if (formData.logo) jobData.append('companyLogo', formData.logo);

        axios
            .post('http://localhost:5000/api/jobs', jobData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            })
            .then((response) => {
                console.log('Job Posted:', response.data);
                setMessage('Job posted successfully!');
                resetForm();
            })
            .catch((error) => {
                console.error('Error posting job:', error);
                setMessage('Failed to post job. Try again.');
            });
    };

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
        document.getElementById('logoUpload').value = null;
    };

    // Framer Motion variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { when: 'beforeChildren', staggerChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="min-h-screen bg-[#04091A] text-white p-6">
            {/* Centered Title */}
            <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
                Post a Job
            </h1>

            {/* Card-like Container with bg-gray-900 to match JobCard */}
            <motion.div
                className="w-full max-w-6xl bg-gray-900 rounded-lg shadow-lg p-6 mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {message && (
                    <motion.div
                        className="mb-4 text-center text-sm text-white bg-purple-600 p-2 rounded"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                    >
                        {message}
                    </motion.div>
                )}

                <motion.form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-6"
                >
                    {/* Left Column */}
                    <motion.div className="space-y-6" variants={itemVariants}>
                        {/* Job Title */}
                        <label className="block">
                            <span className="flex items-center text-gray-200 font-medium mb-2">
                                <Briefcase className="mr-2 h-4 w-4" /> Job Title
                            </span>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600 border-none"
                                placeholder="e.g., Software Engineer"
                                required
                            />
                        </label>

                        {/* Company */}
                        <label className="block">
                            <span className="flex items-center text-gray-200 font-medium mb-2">
                                <Building className="mr-2 h-4 w-4" /> Company
                            </span>
                            <input
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600 border-none"
                                placeholder="e.g., DevHire Inc."
                                required
                            />
                        </label>

                        {/* Location */}
                        <label className="block">
                            <span className="flex items-center text-gray-200 font-medium mb-2">
                                <MapPin className="mr-2 h-4 w-4" /> Location
                            </span>
                            <select
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                                className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600 border-none"
                                required
                            >
                                <option value="">Select Location</option>
                                {states.map((state) => (
                                    <option key={state.id} value={state.name}>
                                        {state.name}
                                    </option>
                                ))}
                            </select>
                        </label>

                        {/* Job Type */}
                        <label className="block">
                            <span className="flex items-center text-gray-200 font-medium mb-2">
                                <Globe className="mr-2 h-4 w-4" /> Job Type
                            </span>
                            <select
                                name="jobType"
                                value={formData.jobType}
                                onChange={handleChange}
                                className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600 border-none"
                                required
                            >
                                <option value="">Select Job Type</option>
                                <option value="Full-time">Full-time</option>
                                <option value="Part-time">Part-time</option>
                                <option value="Contract">Contract</option>
                            </select>
                        </label>

                        {/* Salary */}
                        <label className="block">
                            <span className="flex items-center text-gray-200 font-medium mb-2">
                                <DollarSign className="mr-2 h-4 w-4" /> Salary
                                (Optional)
                            </span>
                            <input
                                type="number"
                                name="salary"
                                placeholder="e.g., 60000"
                                value={formData.salary}
                                onChange={handleChange}
                                className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600 border-none"
                                min="0"
                                step="1000"
                            />
                        </label>
                    </motion.div>

                    {/* Right Column */}
                    <motion.div className="space-y-6" variants={itemVariants}>
                        {/* Description */}
                        <label className="block">
                            <span className="flex items-center text-gray-200 font-medium mb-2">
                                <AlignLeft className="mr-2 h-4 w-4" /> Job
                                Description
                            </span>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600 border-none"
                                rows="4"
                                placeholder="Brief overview of the role..."
                                required
                            ></textarea>
                        </label>

                        {/* Requirements */}
                        <label className="block">
                            <span className="flex items-center text-gray-200 font-medium mb-2">
                                <ClipboardList className="mr-2 h-4 w-4" /> Job
                                Requirements
                            </span>
                            <textarea
                                name="requirements"
                                value={formData.requirements}
                                onChange={handleChange}
                                className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600 border-none"
                                rows="4"
                                placeholder="Required skills, experience, etc."
                                required
                            ></textarea>
                        </label>

                        {/* Apply Link */}
                        <label className="block">
                            <span className="flex items-center text-gray-200 font-medium mb-2">
                                <Globe className="mr-2 h-4 w-4" /> Application
                                Link (Optional)
                            </span>
                            <input
                                type="text"
                                name="applyLink"
                                placeholder="e.g., https://company.com/apply"
                                value={formData.applyLink}
                                onChange={handleChange}
                                className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600 border-none"
                            />
                        </label>

                        {/* File Upload */}
                        <label className="block">
                            <span className="flex items-center text-gray-200 font-medium mb-2">
                                <UploadCloud className="mr-2 h-4 w-4" /> Company
                                Logo (Optional)
                            </span>
                            <input
                                id="logoUpload"
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="
                  w-full
                  p-3
                  rounded
                  bg-gray-800
                  text-white
                  focus:outline-none
                  focus:ring-2
                  focus:ring-purple-600
                  border-none
                  file:bg-gray-700
                  file:text-white
                  file:px-4
                  file:py-2
                  file:rounded
                  file:mr-4
                "
                            />
                        </label>
                    </motion.div>

                    {/* Submit Button (Spans both columns) */}
                    <motion.div
                        className="lg:col-span-2"
                        variants={itemVariants}
                    >
                        <button
                            type="submit"
                            className="
                w-full
                py-3
                mt-2
                rounded
                text-white
                font-semibold
                bg-gradient-to-r
                from-[#A259FF]
                to-[#6C00FF]
                hover:opacity-90
                transition
                focus:outline-none
                focus:ring-2
                focus:ring-purple-600
              "
                        >
                            Post Job
                        </button>
                    </motion.div>
                </motion.form>
            </motion.div>
        </div>
    );
};

export default PostJobs;
