import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
   
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-indigo-300">
    <div className="bg-white p-10 rounded-lg shadow-xl w-96 transition-transform transform hover:scale-105 hover:shadow-2xl">
      <h2 className="text-3xl font-extrabold mb-6 text-center text-indigo-600 hover:text-indigo-900 transition-colors duration-300 ease-in-out">
        Login
      </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>

            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition duration-300 ease-in-out transform hover:bg-indigo-50 hover:border-indigo-600"></input>

          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-transform transform hover:scale-105 hover:shadow-lg">

            Sign In
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link
            to="/register"
            className="text-sm text-indigo-600 hover:text-indigo-500"
          >
            Don't have an account? Register here
          </Link>
        </div>
      </div>
    </div>
  );
}
