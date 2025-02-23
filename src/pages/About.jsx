import React, { useState, useEffect } from 'react';
import Animation from '../assets/loading/Animation.json'; // Ensure this path is correct
import Lottie from 'lottie-react';
import { useLocation } from 'react-router-dom'; // We use this to detect when the About page is accessed

const About = () => {
  const [loading, setLoading] = useState(true); // Initially show loading
  const location = useLocation(); // To detect when the user enters the About page

  // Trigger loading when the page is loaded
  useEffect(() => {
    if (location.pathname === '/about') {
      setLoading(true); // Start loader when user enters About page

      setTimeout(() => {
        setLoading(false); // Stop loading after 2 seconds (simulating page load)
      }, 2000); // You can adjust the timeout duration as needed
    }
  }, [location.pathname]);

  return (
    <section className="py-12 bg-white text-gray-800">
      <div className="max-w-3xl mx-auto px-4">
        {/* Conditional Rendering for Loader or Content */}
        {loading ? (
          <div className="flex justify-center items-center h-32">
            <Lottie animationData={Animation} loop={true} />{' '}
            {/* Animation shows when loading */}
          </div>
        ) : (
          <>
            <h1 className="text-4xl font-bold text-center mb-8">
              About Our e-Shop
            </h1>
            <p className="text-lg leading-relaxed mb-6">
              Welcome to our e-Shop, where quality meets convenience! We are
              dedicated to providing you with a curated selection of products
              that blend style, functionality, and affordability. Our team works
              hard to bring you the latest trends, timeless classics, and
              exclusive items you won't find anywhere else.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Established with a passion for exceptional customer service, our
              mission is to create a seamless shopping experience that exceeds
              your expectations. From user-friendly navigation to secure payment
              options and reliable delivery, every detail is designed with you
              in mind.
            </p>
            <p className="text-lg leading-relaxed">
              Thank you for choosing us as your trusted shopping destination. We
              look forward to serving you and making your online shopping
              journey as enjoyable and memorable as possible.
            </p>
          </>
        )}
      </div>
    </section>
  );
};

export default About;
