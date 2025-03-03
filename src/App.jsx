import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { Button } from './components/ui/button';

// Create the router that will be used to setup our project routes
const router = createBrowserRouter([
    {
        element: <AppLayout />, //randers a layout that wraps all pages
        children: [
            {
                path: '/',
                element: <LandingPage />,
            },
        ],
    },
]);

function App() {
    return (
        <>
        <RouterProvider router={router}/>
            <h1></h1>
        </>
    );
}

export default App;
