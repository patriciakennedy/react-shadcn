import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
    return (
        <div>
            <div className="grid-background"></div>
            <main className="min-h-screen container">
                <Header />
                <Outlet />
            </main>
            <div className="p-10 text-center bg-gray-800 mt-10">
                Made with 💗 by RoadsideCoder
            </div>
        </div>
    );
};

export default AppLayout;

// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import Header from '../components/Header';

// const AppLayout = () => {
//     return (
//         <div className="grid-background">
//             <main className="min-h-screen">
//                 <Header />
//                 <Outlet />
//             </main>
//             <div className="p-10 text-center bg-grey-800 mt-10">Made with love by Pat Kennedy</div>
//         </div>
//     );
// };

// export default AppLayout;
