import { Link } from "react-router-dom";
import UserList from "./UserList";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-gradient-to-r from-indigo-700 to-indigo-500 text-white p-6 shadow-lg transform transition-transform hover:scale-105 hover:bg-indigo-600">
        <h2 className="text-2xl font-semibold mb-6 font-style: normal;">
          Admin Dashboard
        </h2>
        <nav>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="block py-2 px-4 rounded-lg bg-indigo-700 text-white shadow-md transition duration-300 ease-in-out transform hover:bg-indigo-600 hover:shadow-lg hover:scale-105 text-1xl font-semibold mb-3 font-style: normal;"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/Login"
                className="block py-2 px-4 rounded-lg bg-indigo-700 text-white shadow-md transition duration-300 ease-in-out transform hover:bg-indigo-600 hover:shadow-lg hover:scale-105 text-1xl font-semibold mb-3 font-style: normal;"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/Register"
                className="block py-2 px-4 rounded-lg bg-indigo-700 text-white shadow-md transition duration-300 ease-in-out transform hover:bg-indigo-600 hover:shadow-lg hover:scale-105 text-1xl font-semibold mb-3 font-style: normal;"
              >
                Register
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-6 overflow-auto">
        <h1 className="font-sans text-3xl font-semibold font-style: normal;">Dashboard</h1>
        <UserList />
      </main>
    </div>
  );
}
