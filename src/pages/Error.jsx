import React from 'react';
import ErrorPageImage from '../assets/images/ErrorPage.jpg';

const Error = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <img
        src={ErrorPageImage}
        alt="Error Page"
        className="max-w-full md:max-w-lg rounded-lg  "
      />
    </div>
  );
};

export default Error;
