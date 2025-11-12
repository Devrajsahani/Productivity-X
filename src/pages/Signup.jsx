import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Signup() {
  const { signup, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location.state?.from || "/";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    const res = await signup(name.trim(), email.trim(), password);

    if (res.ok) {
      navigate(redirectPath, { replace: true });
    } else {
      setError(res.error || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-tr from-purple-100 to-blue-100 dark:from-gray-900 dark:to-gray-800 p-6">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          Create an Account
        </h2>

        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label className="block text-xs text-gray-600 dark:text-gray-300">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded-md bg-transparent dark:border-gray-700"
              required
            />
          </div>

          <div>
            <label className="block text-xs text-gray-600 dark:text-gray-300">Email</label>
            <input
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-md bg-transparent dark:border-gray-700"
              required
            />
          </div>

          <div>
            <label className="block text-xs text-gray-600 dark:text-gray-300">Password</label>
            <input
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-md bg-transparent dark:border-gray-700"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-60"
          >
            {loading ? "Creating account..." : "Sign Up"}
          </button>

          <p className="text-center text-gray-600 dark:text-gray-300 text-sm">
            Already have an account?{" "}
            <span className="text-blue-600 cursor-pointer" onClick={() => navigate("/login")}>
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
