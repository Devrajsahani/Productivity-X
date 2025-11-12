import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function EditProfile() {
  const { user, updateUser } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [error, setError] = useState("");

  const handleSave = (e) => {
    e.preventDefault();

    if (!email.includes("@")) {
      setError("Invalid email format");
      return;
    }

    updateUser({ name, email });
    navigate("/profile");
  };

  return (
    <div className="max-w-lg mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-5">
        Edit Profile
      </h1>

      <form onSubmit={handleSave} className="space-y-5">

        <div>
          <label className="block text-sm mb-1 text-gray-500 dark:text-gray-300">Name</label>
          <input
            className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 
            bg-white dark:bg-gray-700 text-gray-900 dark:text-white 
            focus:ring-2 focus:ring-indigo-400"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-1 text-gray-500 dark:text-gray-300">Email</label>
          <input
            className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 
            bg-white dark:bg-gray-700 text-gray-900 dark:text-white 
            focus:ring-2 focus:ring-indigo-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          className="w-full py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition"
        >
          Save Changes
        </button>

        <button
          type="button"
          onClick={() => navigate("/profile")}
          className="w-full py-2 rounded-md bg-gray-300 dark:bg-gray-700 text-black dark:text-white mt-2"
        >
          Cancel
        </button>

      </form>
    </div>
  );
}
