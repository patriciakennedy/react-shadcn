import React from 'react';
import { useNavigate } from 'react-router-dom';
import UserTypeCard from '../components/UserTypeCard';
import { Briefcase, User } from 'lucide-react'; // Using lucide-react icons

const GetStarted = () => {
    const navigate = useNavigate();

    const handleSelect = (userType) => {
        navigate('/login', { state: { userType } });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#04091A] p-6 mt-[-80px]">
            <h1 className="text-3xl font-extrabold text-white mb-8">
                Get Started
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <UserTypeCard
                    userType="Recruiter"
                    description="Post jobs and find top talent"
                    icon={<Briefcase size={40} className="text-purple-400" />}
                    onClick={() => handleSelect('Recruiter')}
                />
                <UserTypeCard
                    userType="Job Seeker"
                    description="Browse jobs and apply easily"
                    icon={<User size={40} className="text-blue-400" />}
                    onClick={() => handleSelect('Job Seeker')}
                />
            </div>
        </div>
    );
};

export default GetStarted;
