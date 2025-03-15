import React from 'react';

const UserTypeCard = ({ icon, userType, description, onClick }) => {
    return (
        <div
            className="border border-gray-700 bg-gray-900 p-6 rounded-lg shadow-lg text-center cursor-pointer hover:bg-gray-800 hover:shadow-xl transition-all"
            onClick={onClick}
        >
            <div className="text-5xl mb-4 text-white">{icon}</div>
            <h2 className="text-2xl font-semibold text-white">{userType}</h2>
            <p className="text-gray-400 text-base">{description}</p>
        </div>
    );
};

export default UserTypeCard;
