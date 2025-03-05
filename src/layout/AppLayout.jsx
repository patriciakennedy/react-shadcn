import React from 'react';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
    return (
        <div className="grid-background">
            <Outlet />
        </div>
    );
};

export default AppLayout;
