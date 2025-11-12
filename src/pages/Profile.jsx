import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Profile() {
  const { user } = useAuth();

  return (
    <div className="max-w-lg mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
        Your Profile
      </h1>

      {/* Edit button */}
      <div className="flex justify-end mb-4">
        <NavLink
          to="/edit-profile"
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          Edit Profile
        </NavLink>
      </div>

      {/* Avatar + name */}
      <div className="flex items-center gap-5 mb-6">
        <img
          src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.name || user.email}`}
          alt="avatar"
          className="w-20 h-20 rounded-full bg-gray-700"
        />

        <div>
          <p className="text-xl font-semibold text-gray-900 dark:text-white">
            {user.name || "User"}
          </p>
          <p className="text-gray-600 dark:text-gray-300">{user.email}</p>
        </div>
      </div>

      {/* Extra info */}
      <div className="text-gray-700 dark:text-gray-300 space-y-2">
        <p><strong>User ID:</strong> {user.id}</p>
        <p><strong>Account Created:</strong> {new Date().toLocaleDateString()}</p>
      </div>
    </div>
  );
}
