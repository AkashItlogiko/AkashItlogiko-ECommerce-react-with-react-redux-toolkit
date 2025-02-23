import React, { useState, useEffect } from 'react';
import Animation from '../assets/loading/Animation.json'; // Ensure this path is correct
import Lottie from 'lottie-react';
import { useLocation } from 'react-router-dom'; // We use this to detect when the Contact page is accessed

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(true); // Initially show loading
  const location = useLocation(); // To detect when the user enters the contact page

  // Trigger loading when the page is loaded
  useEffect(() => {
    if (location.pathname === '/contact') {
      setLoading(true); // Start loader when user enters contact page

      setTimeout(() => {
        setLoading(false); // Stop loading after 2 seconds (simulating page load)
      }, 2000); // You can adjust the timeout duration as needed
    }
  }, [location.pathname]);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Form Submitted', formData);
    // Submit logic here
  };

  return (
    <div className="p-8 max-w-3xl mx-auto bg-gray-50 rounded-lg">
      {/* Header */}
      <h1 className="text-center text-2xl font-semibold">Contact Us</h1>
      <p className="text-center text-gray-600">
        We would love to hear from you!
      </p>

      {/* Conditional Rendering for Loader or Form */}
      {loading ? (
        <div className="flex justify-center items-center h-32">
          <Lottie animationData={Animation} loop={true} />{' '}
          {/* Animation shows when loading */}
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="block font-semibold text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="w-full p-3 text-lg border border-gray-300 rounded-md mt-2 mb-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block font-semibold text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full p-3 text-lg border border-gray-300 rounded-md mt-2 mb-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block font-semibold text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              rows="6"
              required
              className="w-full p-3 text-lg border border-gray-300 rounded-md mt-2 mb-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md text-lg font-semibold cursor-pointer hover:bg-blue-600 transition duration-200"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;
