import React from 'react';
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from './card'; // Fix the path to correctly reference card.jsx

import { Briefcase, MapPin, Building } from 'lucide-react';
import { Button } from './button'; // Fix this if button.jsx is also in ui folder
import { Link } from 'react-router-dom';

const JobCard = ({ job }) => {
    return (
        <Card className="w-full max-w-md bg-gray-900 border-gray-700 shadow-lg transition-all hover:shadow-xl hover:bg-gray-800">
            {/* Card Header */}
            <CardHeader className="p-4 flex items-center gap-4">
                <div className="flex-shrink-0">
                    {job.company_logo ? (
                        <img
                            src={job.company_logo}
                            alt={job.company}
                            className="w-12 h-12 rounded-full object-cover"
                        />
                    ) : (
                        <Building size={40} className="text-gray-400" />
                    )}
                </div>
                <div>
                    <CardTitle className="text-white">{job.title}</CardTitle>
                    <CardDescription className="text-gray-400">
                        {job.company}
                    </CardDescription>
                </div>
            </CardHeader>

            {/* Card Content */}
            <CardContent className="p-4 space-y-2">
                <div className="flex items-center gap-2 text-gray-300">
                    <Briefcase size={18} />
                    <span>{job.type || 'Full-Time'}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                    <MapPin size={18} />
                    <span>{job.location || 'Remote'}</span>
                </div>
            </CardContent>

            {/* Card Footer */}
            <CardFooter className="p-4 flex justify-between">
                <Button variant="gradient" size="sm">
                    <Link to={`/jobs/${job.id}`}>View Details</Link>
                </Button>
                <Button variant="electricBlue" size="sm">
                    Save
                </Button>
            </CardFooter>
        </Card>
    );
};

export default JobCard;
