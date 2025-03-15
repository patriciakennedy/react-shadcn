import React from 'react';

const UserTypeCard = ({ icon, userType, description, onClick }) => {
    return (
        <div
            className="border p-4 rounded-lg shadow-lg text-center cursor-pointer hover:shadow-xl transition-all"
            onClick={onClick} //this allow clicks to rrigger navigation
        >
            <div className="text-4xl mb-2">{icon}</div>
            <h2 className="text-xl font-semibold">{userType}</h2>
            <p className="text-gray-500 text-sm">{description}</p>
        </div>
    );
};

export default UserTypeCard;
