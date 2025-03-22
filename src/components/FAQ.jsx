import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
    {
        question: 'How do I create an account?',
        answer: 'Simply click on the “Get Started” button and follow the prompts to sign up. You can also sign in with your Google account for quick access.',
    },
    {
        question: 'Is DevHire free to use?',
        answer: 'Yes! Our basic features are completely free for job seekers. Recruiters have the option to post jobs for free or upgrade for premium features.',
    },
    {
        question: 'How do I apply for a job?',
        answer: 'Browse the available jobs, select the one that matches your skills, and click “Apply.” You can upload your resume or connect your LinkedIn profile for quick applications.',
    },
    {
        question: 'Can I save jobs to apply later?',
        answer: 'Absolutely. Just click the “Save Job” button on any listing, and it will appear in your saved jobs dashboard.',
    },
    {
        question: 'What if I forget my password?',
        answer: 'Click on the “Forgot Password?” link on the login page. We’ll send a password reset link to your registered email address.',
    },
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <section className="w-full bg-[#04091A] py-16 px-4 sm:px-6 lg:px-8 text-white">
            <div className="max-w-screen-xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-10">
                    Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                    {faqData.map((item, index) => {
                        const isOpen = activeIndex === index;
                        return (
                            <motion.div
                                key={index}
                                layout
                                className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center justify-between px-4 py-5 focus:outline-none"
                                >
                                    <span className="text-base sm:text-lg font-semibold text-white">
                                        {item.question}
                                    </span>
                                    <span className="ml-4 text-gray-400">
                                        {isOpen ? (
                                            <ChevronUp />
                                        ) : (
                                            <ChevronDown />
                                        )}
                                    </span>
                                </button>
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            key="content"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{
                                                height: 'auto',
                                                opacity: 1,
                                            }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{
                                                duration: 0.5,
                                                ease: 'easeInOut',
                                            }}
                                            className="px-4 pb-4 text-sm sm:text-base text-gray-200"
                                        >
                                            {item.answer}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
