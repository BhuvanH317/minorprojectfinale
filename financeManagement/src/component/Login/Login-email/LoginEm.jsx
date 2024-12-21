import React from 'react';
import './Login-Email.css';
import { Link } from 'react-router-dom';

function LoginEm() {
  return (
    <div
      className="flex items-center justify-end p-14 min-h-screen bg-cover bg-center bg-no-repeat"

    >
      <div className="relative right-32">
        <div className="text-center">
          <div
            className="typing-effect text-blue-950 font-bold"
            
          >
            FinFlow
          </div><br />
          <p className="typing-effect1 text-blue-950 text-lg">
            Help you manage your Finance
          </p>
        </div>
      </div>
      <div className="bg-transparent p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-blue-950 mb-6 text-center">Log In</h2>
        <form>
        <div className="mb-4">
            <label className="block text-blue-950 mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="email"
              id="email"
              placeholder="Example@gmail.com"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-blue-950 mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="password"
              id="password"
              placeholder="Min 8 character include special character"
              required
            />
          </div>
          <div className="flex items-center mb-4">
            <label className="text-blue-950" htmlFor="terms">
              Log In using Phone no. {" "}<a href="login-phone" className='text-blue-500 hover:underline'>   click here</a>{/* use link tag here */}
            </label>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-blue-950 hover:bg-blue-900 border-blue-950 text-white font-semibold px-6 py-2 rounded-3xl"
              type="submit"
            >
              Log In
            </button>
          </div>
        </form>
        <p className="text-blue-950 text-center mt-4">
          Don"t have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline"> {/* use link tag here */}
            SignUp
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginEm;
