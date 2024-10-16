import { useState, useEffect } from "react";
import axios from "axios";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data);
        setFilteredUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const filtered = users.filter(
      (user) =>
        user.name.toLowerCase().includes(filter.toLowerCase()) ||
        user.email.toLowerCase().includes(filter.toLowerCase()) ||
        user.company.name.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [filter, users]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">User List</h2>
      <input
        type="text"
        placeholder="Filter users..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="mb-4 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gradient-to-r from-gray-50 to-indigo-100 hover:from-indigo-200 hover:to-indigo-400 transition-colors duration-300 ease-in-out">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-1000 uppercase tracking-wider hover:text-indigo-900 transition-colors duration-300 ease-in-out">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-1000 uppercase tracking-wider hover:text-indigo-900 transition-colors duration-300 ease-in-out">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-1000 uppercase tracking-wider hover:text-indigo-900 transition-colors duration-300 ease-in-out">
                  Company
                </th>
              </tr>
            </thead>
        
        
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {user.company.name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
