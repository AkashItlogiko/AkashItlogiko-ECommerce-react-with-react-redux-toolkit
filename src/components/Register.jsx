import React from 'react';

const Register = ({ openLoging }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="">
            Name
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border"
            placeholder="Enter Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="">
            Email
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border"
            placeholder="Enter Email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            className="w-full px-3 py-2 border"
            placeholder="Enter Password"
          />
        </div>

        <div className="mb-4">
          <button type="submit" className="w-full bg-red-600 text-white py-2">
            Sign up
          </button>
        </div>
      </form>
      <div className="text-center">
        <span className="text-gray-700">Already have an account?</span>
        <button className="text-red-800" onClick={openLoging}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Register;
