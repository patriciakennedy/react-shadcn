import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
// import { Button } from './components/ui/button';
import AppLayout from './layout/AppLayout';
import LandingPage from './pages/Landing';
import OnBoarding from './pages/OnBoarding';
import JobListing from './pages/JobListing';
import JobPage from './pages/JobPage';
import MyJobs from './pages/MyJobs';
import PostJobs from './pages/PostJobs';
import SavedJobs from './pages/SavedJobs';
import { ThemeProvider } from './components/theme-provider';
import About from './pages/About';
import Contact from './pages/Contact';
import Resources from './pages/Resources';
import GetStarted from './pages/GetStarted';

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
                path: '/MyJobobs',
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
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/resources',
                element: <Resources />,
            },
            {
                path: '/get-started',
                element: <GetStarted />,
            },
        ],
    },
]);

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
