import React from 'react';
import { motion } from 'framer-motion';

const Resources = () => {
    return (
        <div className="min-h-screen bg-[#04091A] text-white">
            {/* HERO SECTION */}
            <div
                className="relative h-[50vh] bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: "url('/resources-hero.jpg')" }}
            >
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <motion.div
                    className="relative z-10 text-center px-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
                        Developer Resources
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Explore our curated library of e-books, tools, and
                        articles to help you excel in your career and projects.
                    </p>
                </motion.div>
            </div>

            {/* E-BOOKS & GUIDES SECTION */}
            <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl font-bold mb-10">
                    E-Books & Guides
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">
                            The Ultimate DevOps Guide
                        </h3>
                        <p className="text-gray-300 mb-4">
                            A comprehensive guide to modern DevOps practices and
                            toolchains.
                        </p>
                        <button className="bg-gradient-to-r from-[#A259FF] to-[#6C00FF] text-white px-4 py-2 rounded-md">
                            Download
                        </button>
                    </div>
                    {/* Card 2 */}
                    <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">
                            Remote Work Essentials
                        </h3>
                        <p className="text-gray-300 mb-4">
                            Best practices for remote developers to stay
                            productive and connected.
                        </p>
                        <button className="bg-gradient-to-r from-[#A259FF] to-[#6C00FF] text-white px-4 py-2 rounded-md">
                            Download
                        </button>
                    </div>
                    {/* Card 3 */}
                    <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">
                            Interview Prep Playbook
                        </h3>
                        <p className="text-gray-300 mb-4">
                            A guide to nailing your tech interviews, from phone
                            screen to offer.
                        </p>
                        <button className="bg-gradient-to-r from-[#A259FF] to-[#6C00FF] text-white px-4 py-2 rounded-md">
                            Download
                        </button>
                    </div>
                </div>
            </div>

            {/* DEVELOPER TOOLS SECTION */}
            <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl font-bold mb-10">
                    Developer Tools
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">
                            API Testing
                        </h3>
                        <p className="text-gray-300 mb-4">
                            Links to popular tools like Postman, Insomnia, or
                            Hoppscotch.
                        </p>
                        <a href="#" className="underline text-blue-400 text-sm">
                            Visit Site
                        </a>
                    </div>
                    {/* Card 2 */}
                    <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">
                            Code Collaboration
                        </h3>
                        <p className="text-gray-300 mb-4">
                            Explore GitHub, GitLab, and other code hosting
                            platforms.
                        </p>
                        <a href="#" className="underline text-blue-400 text-sm">
                            Visit Site
                        </a>
                    </div>
                    {/* Card 3 */}
                    <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">
                            Package Managers
                        </h3>
                        <p className="text-gray-300 mb-4">
                            npm, Yarn, and other tools to manage your project's
                            dependencies.
                        </p>
                        <a href="#" className="underline text-blue-400 text-sm">
                            Visit Site
                        </a>
                    </div>
                </div>
            </div>

            {/* CAREER ARTICLES SECTION */}
            <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl font-bold mb-10">
                    Career Articles
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">
                            Mastering the Tech Resume
                        </h3>
                        <p className="text-gray-300 mb-4">
                            Tips for structuring your resume to stand out in a
                            competitive market.
                        </p>
                        <a href="#" className="underline text-blue-400 text-sm">
                            Read Article
                        </a>
                    </div>
                    {/* Card 2 */}
                    <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">
                            Salary Negotiation 101
                        </h3>
                        <p className="text-gray-300 mb-4">
                            Learn how to confidently negotiate your salary and
                            benefits.
                        </p>
                        <a href="#" className="underline text-blue-400 text-sm">
                            Read Article
                        </a>
                    </div>
                    {/* Card 3 */}
                    <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">
                            Building Your Personal Brand
                        </h3>
                        <p className="text-gray-300 mb-4">
                            Strategies to showcase your skills and expertise to
                            potential employers.
                        </p>
                        <a href="#" className="underline text-blue-400 text-sm">
                            Read Article
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resources;
