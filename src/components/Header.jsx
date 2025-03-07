import {
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
} from '@clerk/clerk-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="py-4 flex justify-between items-center">
            <Link>
                <img src="/logo.png" className="h-20" alt="logo" />
            </Link>

            {/* <button variant="outline">Login</button> */}

            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </nav>
    );
};

export default Header;
