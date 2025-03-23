import React from 'react';

const Contact = () => {
    return (
        <div className="min-h-screen bg-[#04091A] text-white">
            {/* TOP SECTION */}
            <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div className="space-y-4">
                    <h5 className="text-sm uppercase text-purple-400 tracking-widest">
                        Get In Touch
                    </h5>
                    <h2 className="text-4xl sm:text-5xl font-extrabold">
                        Contact Us Today!
                    </h2>
                </div>

                <div>
                    <p className="text-gray-300 text-xl sm:text-2xl leading-relaxed">
                        Whether you&apos;re an individual, a small business, or
                        a large enterprise, we have flexible plans designed to
                        offer affordability without compromising on quality.
                    </p>
                </div>
            </div>
            {/* CONTACT FORM & SUPPORT INFO SECTION */}
            <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Left Column: Contact Form */}
                <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold mb-6">Your message</h3>
                    <form className="space-y-6">
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-gray-300 mb-2"
                            >
                                Your name
                            </label>
                            <input
                                id="name"
                                type="text"
                                className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-gray-300 mb-2"
                            >
                                Your email
                            </label>
                            <input
                                id="email"
                                type="email"
                                className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="message"
                                className="block text-gray-300 mb-2"
                            >
                                Your text
                            </label>
                            <textarea
                                id="message"
                                rows="5"
                                className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                                placeholder="Write your message..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 bg-gradient-to-r from-[#A259FF] to-[#6C00FF] text-white font-semibold rounded-md hover:opacity-90 transition"
                        >
                            Submit
                        </button>
                    </form>
                </div>

                {/* Right Column: Support Team Info */}
                <div className="flex flex-col justify-center space-y-6">
                    <h3 className="text-2xl font-bold">
                        Contact our support team to find your job
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                        We are always looking for motivated individuals who are
                        passionate about making a difference and want to be part
                        of a dynamic and innovative team.
                    </p>
                    <div className="space-y-3 text-gray-300">
                        <p className="flex items-center gap-2">
                            <span>📍</span>5 Washington Square, New York, USA
                        </p>
                        <p className="flex items-center gap-2">
                            <span>📞</span>
                            +1 212 425 8617
                        </p>
                        <p className="flex items-center gap-2">
                            <span>✉️</span>
                            information@office.com
                        </p>
                    </div>
                </div>
            </div>
            {/* FAQ SECTION */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-center">
                    Customers frequently ask
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* FAQ Item 1 */}
                    <div className="bg-gray-900 p-4 rounded-lg flex items-center justify-between">
                        <p className="text-gray-200 text-sm sm:text-base">
                            How do I create an account on the job board site?
                        </p>
                        <span className="text-gray-400 text-xl">⌄</span>
                    </div>
                    {/* FAQ Item 2 */}
                    <div className="bg-gray-900 p-4 rounded-lg flex items-center justify-between">
                        <p className="text-gray-200 text-sm sm:text-base">
                            How long does it take for my job listing to be
                            approved and go live?
                        </p>
                        <span className="text-gray-400 text-xl">⌄</span>
                    </div>
                    {/* FAQ Item 3 */}
                    <div className="bg-gray-900 p-4 rounded-lg flex items-center justify-between">
                        <p className="text-gray-200 text-sm sm:text-base">
                            What are the payment options available for job
                            listings?
                        </p>
                        <span className="text-gray-400 text-xl">⌄</span>
                    </div>
                    {/* FAQ Item 4 */}
                    <div className="bg-gray-900 p-4 rounded-lg flex items-center justify-between">
                        <p className="text-gray-200 text-sm sm:text-base">
                            How can I search for specific job categories or
                            locations on the site?
                        </p>
                        <span className="text-gray-400 text-xl">⌄</span>
                    </div>
                    {/* FAQ Item 5 */}
                    <div className="bg-gray-900 p-4 rounded-lg flex items-center justify-between">
                        <p className="text-gray-200 text-sm sm:text-base">
                            Can I post multiple job listings under one account?
                        </p>
                        <span className="text-gray-400 text-xl">⌄</span>
                    </div>
                    {/* FAQ Item 6 */}
                    <div className="bg-gray-900 p-4 rounded-lg flex items-center justify-between">
                        <p className="text-gray-200 text-sm sm:text-base">
                            Is there a limit to the number of applicants I can
                            receive for a job posting?
                        </p>
                        <span className="text-gray-400 text-xl">⌄</span>
                    </div>
                    {/* FAQ Item 7 */}
                    <div className="bg-gray-900 p-4 rounded-lg flex items-center justify-between">
                        <p className="text-gray-200 text-sm sm:text-base">
                            Can I edit or update my job listing after it has
                            been posted?
                        </p>
                        <span className="text-gray-400 text-xl">⌄</span>
                    </div>
                    {/* FAQ Item 8 */}
                    <div className="bg-gray-900 p-4 rounded-lg flex items-center justify-between">
                        <p className="text-gray-200 text-sm sm:text-base">
                            What should I do if I’m having trouble accessing my
                            account or resetting my password?
                        </p>
                        <span className="text-gray-400 text-xl">⌄</span>
                    </div>
                </div>
            </div>

            {/* FUTURE SECTIONS (e.g., Contact Form, Map, etc.) */}
        </div>
    );
};

export default Contact;
