import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';


const Header = () => {
    return (
        // Logo
        <nav className="py-4 flex justify-between items-center px-6 sm:px-12">
            <Link>
                <img src="/logo.png" className="h-20" alt="DevHire Logo" />
            </Link>

            {/* Navigation Links */}
            <div className="hidden sm:flex gap-6 tex-white text-lg">
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

            {/* "Get Started" Button */}
            {/* <button variant="outline">Login</button> */}
            <Link to="/get-started">
                <Button variant="outlinegradient" size="lg">
                    Get Started
                </Button>
            </Link>
        </nav>
    );
};

export default Header;


