import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { Button } from './components/ui/button';
import AppLayout from './layout/AppLayout';
import LandingPage from './pages/Landing';
import OnBoarding from './pages/OnBoarding';
import JobListing from './pages/JobListing';
import JobPage from './pages/JobPage';
import MyJobs from './pages/MyJobs';
import PostJobs from './pages/PostJobs';
import SavedJobs from './pages/SavedJobs';

// Create the router that will be used to setup our project routes
const router = createBrowserRouter([
    {
        element: <AppLayout />, //randers a layout that wraps all pages
        children: [
            {
                path: '/',
                element: <LandingPage />,
            },
            {
                path: '/OnBoarding',
                element: <OnBoarding />,
            },
            {
                path: '/JobListing',
                element: <JobListing />,
            },
            {
                path: '/JobPage/:id',
                element: <JobPage />,
            },
            {
                path: '/MyJobs',
                element: <MyJobs />,
            },
            {
                path: '/PostJobs',
                element: <PostJobs />,
            },
            {
                path: '/SavedJobs',
                element: <SavedJobs />,
            },
        ],
    },
]);

function App() {
    return (
        <>
            <RouterProvider router={router} />
            <h1></h1>
        </>
    );
}

export default App;
