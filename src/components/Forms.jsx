 "use client"
 import React, { useState } from 'react';
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function Forms() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <form className="max-w-md mx-auto mt-50 p-6 bg-white rounded-lg flex flex-col shadow-lg space-y-4">
      <h2 className="text-black font-bold text-5xl">Login</h2>
        <div>
          <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">First Name</label>
          <input
            type="text"
            id="firstname"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" />
        </div>
        <div>
          <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">Last Name</label>
          <input
            type="text"
            id="lastname"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"/>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
            type="email"
            id="email"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        <div className="relative">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>

          <input
            type={showPassword ? "text" : "password"}
            id="password"
            className="w-full px-3 py-2 border  text-black border-gray-300 rounded-md shadow-sm pr-10"
          />

          <span
            className="absolute right-3 top-10 cursor-pointer text-gray-600"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
          </span>
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

