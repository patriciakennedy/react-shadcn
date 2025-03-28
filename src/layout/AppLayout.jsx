import HowItWorks from '../components/HowItWorks';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
    return (
        <div>
            <Header />
            {/* <div className="grid-background"></div> */}
            <main className="min-h-screen container mx-auto px-6">
                <Outlet />
            </main>
            <div className="p-10 text-center bg-gray-800 mt-10">
                Made with 💗 by Patricia Kennedy
            </div>
        </div>
    );
};

export default AppLayout;
