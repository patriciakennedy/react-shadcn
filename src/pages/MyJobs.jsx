import React, { useState, useEffect } from 'react';

const MyJobs = () => {
    // Dummy data for applied jobs; later, replace with an API call to fetch real data.
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        const dummyApplications = [
            {
                id: 1,
                title: 'Software Engineer',
                company: 'DevHire Inc.',
                companyLogo: '', // Optional: add image URL here
                location: 'San Francisco, CA',
                status: 'Interviewing',
                dateApplied: '2023-03-15',
            },
            {
                id: 2,
                title: 'Frontend Developer',
                company: 'Tech Corp',
                companyLogo: '',
                location: 'New York, NY',
                status: 'Applied',
                dateApplied: '2023-03-10',
            },
            {
                id: 3,
                title: 'Backend Developer',
                company: 'Innovate LLC',
                companyLogo: '',
                location: 'Austin, TX',
                status: 'Closed',
                dateApplied: '2023-02-28',
            },
        ];
        setApplications(dummyApplications);
    }, []);

    return (
        <div className="min-h-screen bg-[#04091A] text-white">
            {/* TOP SECTION (Centered Headline & Subheading) */}
            <div className="max-w-9xl mx-auto py-20 px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl sm:text-5xl font-extrabold">
                    Welcome to Our Shop: Where Quality Meets Style
                </h2>
                <p className="text-gray-300 text-xl sm:text-2xl leading-relaxed mt-4">
                    We take pride in curating a diverse range of items that
                    combine quality craftsmanship with impeccable style.
                </p>
            </div>

            {/* HORIZONTAL LINE DIVIDER */}
            <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
                <hr className="border-t border-gray-700 my-10" />
            </div>

            {/* PAGE TITLE (My Applications) */}
            <h1 className="text-4xl font-bold text-center mb-6">
                My Applications
            </h1>

            {/* Applications Grid (Wider Container) */}
            <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {applications.length > 0 ? (
                        applications.map((app) => (
                            <div
                                key={app.id}
                                className="bg-gray-900 rounded-lg shadow-md p-6"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    {app.companyLogo ? (
                                        <img
                                            src={app.companyLogo}
                                            alt="Company Logo"
                                            className="w-12 h-12 rounded-full object-cover"
                                        />
                                    ) : (
                                        <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                                            <span className="text-xl">
                                                {app.company.charAt(0)}
                                            </span>
                                        </div>
                                    )}
                                    <div>
                                        <h2 className="text-xl font-semibold">
                                            {app.title}
                                        </h2>
                                        <p className="text-gray-400 text-sm">
                                            {app.company} - {app.location}
                                        </p>
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <span className="font-semibold">
                                        Status:
                                    </span>
                                    <span className="text-gray-300 ml-2">
                                        {app.status}
                                    </span>
                                </div>
                                <div>
                                    <span className="font-semibold">
                                        Date Applied:
                                    </span>
                                    <span className="text-gray-300 ml-2">
                                        {app.dateApplied}
                                    </span>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-400">
                            No applications found.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MyJobs;
