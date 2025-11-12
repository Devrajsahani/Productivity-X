import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";

export default function Login() {
  const { login, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location.state?.from || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const res = await login(email.trim(), password);

    if (res.ok) {
      navigate(redirectPath, { replace: true });
    } else {
      setError(res.error || "Login failed");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center 
        bg-gradient-to-tr from-sky-100 to-rose-100 
        dark:from-gray-900 dark:to-gray-800 
        text-gray-900 dark:text-white p-6 transition-colors duration-300"
    >
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8">
        <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
          Welcome back 👋
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
          Sign in to access your <span className="font-semibold">ProductivityX</span> dashboard
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
              className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 
                bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="you@example.com"
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
              className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 
                bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter your password"
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="text-sm text-red-500 text-center">{error}</div>
          )}

          {/* Login Button */}
          <button
            disabled={loading}
            type="submit"
            className="w-full py-2 rounded-md bg-indigo-600 text-white font-medium 
              hover:bg-indigo-700 transition disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>

          {/* Signup Redirect */}
          <div className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
            Don’t have an account?{" "}
            <span
              className="text-indigo-600 font-medium cursor-pointer hover:underline"
              onClick={() => navigate("/signup")}
            >
              Sign up
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
