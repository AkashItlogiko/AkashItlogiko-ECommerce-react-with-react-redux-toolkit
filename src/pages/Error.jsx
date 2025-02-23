import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import ErrorPageImage from '../assets/images/ErrorPage.jpg';

const Error = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <img
        src={ErrorPageImage}
        alt="Error Page"
        className="max-w-full md:max-w-lg rounded-lg mb-4"
      />
      <button
        onClick={() => navigate('/')} // Navigate to the home route
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Go to Home
      </button>
    </div>
  );
};

export default Error;
