import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AdminContext";
import { MdEmail, MdLock } from "react-icons/md";

const Login = () => {
  const { login } = useAppContext();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      login(email, password); // Save to context + localStorage
      navigate("/create");      // Redirect
    } else {
      alert("Please fill in both fields");
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col gap-6 p-8 bg-white rounded-none shadow-none border-none"
      >
        <div className="text-left w-full">
          <h1 className="text-3xl font-bold text-indigo-600">User Login</h1>
          <p className="text-gray-500 mt-1">Welcome back! Please login to your account</p>
        </div>

        <div className="w-full space-y-2">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MdEmail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Enter your email"
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none"
              type="email"
              required
            />
          </div>
        </div>

        <div className="w-full space-y-2">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <MdLock className="h-5 w-5 text-gray-400" />
            </div>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Enter your password"
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none"
              type="password"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Login
        </button>
      </form>
    </div>
  )
};

export default Login;