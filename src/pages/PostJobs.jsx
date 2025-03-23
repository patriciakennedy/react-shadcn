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

  const [states, setStates] = useState([]);
  const [message, setMessage] = useState('');

  // Fetch states from API
  useEffect(() => {
    axios
      .get('http://localhost:5000/api/states')
      .then((response) => setStates(response.data))
      .catch((error) => console.error('Error fetching states:', error));
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle file upload (company logo)
  const handleFileChange = (e) => {
    setFormData({ ...formData, logo: e.target.files[0] });
  };

  // Handle form submission
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
    jobData.append('recruiter_id', 1);
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
    document.getElementById('logoUpload').value = null;
  };

  // Framer Motion variants for container and items
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
    <div className="min-h-screen bg-[#04091A] text-white">
      {/* TOP SECTION (Intro) */}
      <div className="max-w-9xl mx-auto py-20 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <h5 className="text-sm uppercase text-purple-400 tracking-widest">
            Job Post
          </h5>
          <h2 className="text-4xl sm:text-5xl font-extrabold">
            The Easiest Way to Get Your New Job
          </h2>
        </div>
        <div>
          <p className="text-gray-300 text-xl sm:text-2xl leading-relaxed">
            We constantly seek driven individuals who possess a strong commitment
            to creating an impact and aspire to be integral members of a vibrant
            and forward-thinking group.
          </p>
        </div>
      </div>

      {/* DIVIDER SECTION (thin line + centered title) */}
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="border-t border-gray-700 my-10" />
        <h2 className="text-center text-3xl sm:text-4xl font-bold mb-10">
          Post a Job
        </h2>
      </div>

      {/* FORM SECTION */}
      <div className="p-6">
        <motion.div
          className="w-full max-w-9xl bg-gray-900 rounded-lg shadow-lg p-6 mx-auto"
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

              <label className="block">
                <span className="flex items-center text-gray-200 font-medium mb-2">
                  <DollarSign className="mr-2 h-4 w-4" /> Salary (Optional)
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
              <label className="block">
                <span className="flex items-center text-gray-200 font-medium mb-2">
                  <AlignLeft className="mr-2 h-4 w-4" /> Job Description
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

              <label className="block">
                <span className="flex items-center text-gray-200 font-medium mb-2">
                  <ClipboardList className="mr-2 h-4 w-4" /> Job Requirements
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

              <label className="block">
                <span className="flex items-center text-gray-200 font-medium mb-2">
                  <Globe className="mr-2 h-4 w-4" /> Application Link (Optional)
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

              <label className="block">
                <span className="flex items-center text-gray-200 font-medium mb-2">
                  <UploadCloud className="mr-2 h-4 w-4" /> Company Logo (Optional)
                </span>
                <input
                  id="logoUpload"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600 border-none file:bg-gray-700 file:text-white file:px-4 file:py-2 file:rounded file:mr-4"
                />
              </label>
            </motion.div>

            {/* Submit Button (Spans both columns) */}
            <motion.div className="lg:col-span-2" variants={itemVariants}>
              <button
                type="submit"
                className="w-full py-3 mt-2 rounded text-white font-semibold bg-gradient-to-r from-[#A259FF] to-[#6C00FF] hover:opacity-90 transition focus:outline-none focus:ring-2 focus:ring-purple-600"
              >
                Post Job
              </button>
            </motion.div>
          </motion.form>
        </motion.div>
      </div>

      {/* TESTIMONIALS SECTION */}
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h5 className="text-sm uppercase text-purple-400 tracking-widest text-center">
          Testimonials
        </h5>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mt-2">
          Our happy users say about us
        </h2>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mt-4">
          We are grateful to our users for their kind words and testimonials.
          Their success stories motivate us to continually improve our platform
          and provide the best possible job search experience for every user.
        </p>
        <div className="mt-10 flex space-x-6 overflow-x-auto snap-x snap-mandatory scroll-smooth">
          {/* Testimonial Card 1 */}
          <div className="snap-center min-w-[300px] bg-gray-900 p-6 rounded-lg flex flex-col justify-between">
            <div className="text-purple-400 text-sm mb-2">★★★★★</div>
            <p className="text-gray-300 mb-4">
              “Job Board exceeded my expectations in every aspect. From the moment
              I created my profile, I received valuable insights and resources
              through their career guidance.”
            </p>
            <p className="text-gray-400 text-right">David S.</p>
          </div>

          {/* Testimonial Card 2 */}
          <div className="snap-center min-w-[300px] bg-gray-900 p-6 rounded-lg flex flex-col justify-between">
            <div className="text-purple-400 text-sm mb-2">★★★★★</div>
            <p className="text-gray-300 mb-4">
              “As a recent graduate, I was overwhelmed by the job market. However,
              Job Board made the process less daunting and helped me navigate
              through numerous opportunities.”
            </p>
            <p className="text-gray-400 text-right">Sophia L.</p>
          </div>

          {/* Testimonial Card 3 */}
          <div className="snap-center min-w-[300px] bg-gray-900 p-6 rounded-lg flex flex-col justify-between">
            <div className="text-purple-400 text-sm mb-2">★★★★★</div>
            <p className="text-gray-300 mb-4">
              “The platform’s intuitive interface allowed me to narrow down my
              options and discover opportunities that aligned with my desired
              work environment.”
            </p>
            <p className="text-gray-400 text-right">Alex R.</p>
          </div>

          {/* Testimonial Card 4 */}
          <div className="snap-center min-w-[300px] bg-gray-900 p-6 rounded-lg flex flex-col justify-between">
            <div className="text-purple-400 text-sm mb-2">★★★★★</div>
            <p className="text-gray-300 mb-4">
              “I appreciated the quality of companies on the platform. Each listing
              had detailed descriptions, making it easy to understand the role
              and company culture.”
            </p>
            <p className="text-gray-400 text-right">Michael H.</p>
          </div>

          {/* Add more testimonial cards as needed */}
        </div>
      </div>
    </div>
  );
};

export default PostJobs;

