import React from 'react';

interface JobDetailsProps {
  jobName: string;
  category: string;
  companyId: string;
  postDate: string;
  location: string;
  description: string;
}

const JobDetails: React.FC<JobDetailsProps> = ({ jobName, category, companyId, postDate, location, description }) => {
  return (
    <div className="p-3 w-full h-xl bg-white rounded-lg shadow-md h-full">
    <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
        />
      </svg>
    </span>

    <h1 className="mt-4 text-2xl font-bold text-gray-700 capitalize ">
      {jobName}
    </h1>
    <h1 className="mt-2 text-sm text-gray-700 ">
        {category}category
    </h1>
    <p className="mt-2 text-base text-gray-500 ">Company ID: {companyId}</p>
    <p className="mt-2 text-base text-gray-500 ">Location: {location}</p>
    <p className="mt-2 text-base text-gray-500 ">Posted on: {postDate}</p>
    <p className="mt-2 text-base text-gray-500 ">Description: {description}</p>
  </div>
  );
};

export default JobDetails;
