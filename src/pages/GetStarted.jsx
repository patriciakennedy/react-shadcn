import React from 'react';
import { useNavigate } from 'react-router-dom';
import UserTypeCard from './UserTypeCard';
import { Briefcase, User } from 'lucide-react'; // Using lucide-react icons


const GetStarted = () => {
    const navigate = useNavigate(); // Used for navigation

    // Function to handle user type selection
    const handleSelect = (userType) => {
        navigate('/login', { state: { userType } }); // Navigate to login page with user type
    };

    return (
      
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <h1 className="text-2xl font-bold mb-6">Get Started</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div onClick={() => handleSelect('Recruiter')}>
                    <UserTypeCard
                        userType="Recruiter"
                        description="Post jobs and find top talent"
                        icon={<Briefcase size={40} />}
                    />
                </div>
                <div onClick={() => handleSelect('Job Seeker')}>
                    <UserTypeCard
                        userType="Job Seeker"
                        description="Browse jobs and apply easily"
                        icon={<User size={40} />}
                    />
                </div>
            </div>
        </div>
    );
};

export default GetStarted;
