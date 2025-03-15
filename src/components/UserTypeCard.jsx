import React from 'react';


const UserTypeCard = ({ icon, userType, description, onClick }) => {
    return (
        <div
            className="border border-gray-700 p-6 rounded-xl shadow-lg text-center cursor-pointer 
                       hover:shadow-2xl transition-all bg-gray-900 hover:bg-gray-800 
                       text-white transform hover:-translate-y-2"
            onClick={onClick}
        >
            <div className="text-5xl text-purple-400 mb-4">{icon}</div>{' '}
            {/* Neon Purple Icon */}
            <h2 className="text-2xl font-bold text-white">{userType}</h2>{' '}
            {/* White for Visibility */}
            <p className="text-gray-400">{description}</p>{' '}
            {/* Gray for Readability */}
        </div>
    );
};

export default UserTypeCard;

