import { motion } from 'framer-motion';
import React, { useState } from 'react';
// import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false); // State to toggle menu

    return (
        <nav className="py-4 flex justify-between items-center px-6 sm:px-12">
            {/* Logo */}
            <Link>
                <img
                    src="/logo.png"
                    className="h-16 sm:h-20"
                    alt="DevHire Logo"
                />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden sm:flex gap-6 text-white text-lg">
                <Link to="/about" className="hover:text-purple-400 transition">
                    About
                </Link>
                <Link
                    to="/resources"
                    className="hover:text-purple-400 transition"
                >
                    Resources
                </Link>
                <Link
                    to="/contact"
                    className="hover:text-purple-400 transition"
                >
                    Contact
                </Link>
            </div>

            {/* "Get Started" Button (Desktop) */}
            <div className="hidden sm:block">
                <Link to="/get-started">
                    <Button variant="outlinegradient" size="lg">
                        Get Started
                    </Button>
                </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
                className="sm:hidden text-white"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={28} /> : <Menu size={28} />}{' '}
                {/* Toggle between icons */}
            </button>

            {/* Mobile Navigation Menu */}
            {isOpen && (
                // <div className="absolute top-16 left-0 w-full bg-black bg-opacity-90 p-6 flex flex-col gap-4 sm:hidden">

                <motion.div
                    initial={{ y: -100, opacity: 0 }} // Start off-screen
                    animate={{ y: 0, opacity: 1 }} // Slide down and fade in
                    exit={{ y: -100, opacity: 0 }} // Slide up when closing
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="absolute top-16 left-0 w-full bg-black bg-opacity-90 p-6 flex flex-col gap-4 sm:hidden"
                >
                    <Link
                        to="/about"
                        className="text-white hover:text-purple-400 transition"
                        onClick={() => setIsOpen(false)}
                    >
                        About
                    </Link>
                    <Link
                        to="/resources"
                        className="text-white hover:text-purple-400 transition"
                        onClick={() => setIsOpen(false)}
                    >
                        Resources
                    </Link>
                    <Link
                        to="/contact"
                        className="text-white hover:text-purple-400 transition"
                        onClick={() => setIsOpen(false)}
                    >
                        Contact
                    </Link>
                    <Link to="/get-started">
                        <Button
                            variant="outlinegradient"
                            size="lg"
                            className="w-full"
                            onClick={() => setIsOpen(false)}
                        >
                            Get Started
                        </Button>
                    </Link>
                </motion.div>
            )}
        </nav>
    );
};

export default Header;

// const Header = () => {
//     return (
//         // Logo
//         <nav className="py-4 flex justify-between items-center px-6 sm:px-12">
//             <Link>
//                 <img src="/logo.png" className="h-20" alt="DevHire Logo" />
//             </Link>

//             {/* Navigation Links */}
//             <div className="hidden sm:flex gap-6 tex-white text-lg">
//                 <Link to="/about" className="hover:text-purple-400 transition">
//                     About
//                 </Link>
//                 <Link
//                     to="/resources"
//                     className="hover:text-purple-400 transition"
//                 >
//                     Resources
//                 </Link>
//                 <Link
//                     to="/contact"
//                     className="hover:text-purple-400 transition"
//                 >
//                     Contact
//                 </Link>
//             </div>

//             {/* "Get Started" Button */}
//             {/* <button variant="outline">Login</button> */}
//             <Link to="/get-started">
//                 <Button variant="outlinegradient" size="lg">
//                     Get Started
//                 </Button>
//             </Link>
//         </nav>
//     );
// };

// export default Header;
