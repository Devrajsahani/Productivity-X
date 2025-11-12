import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Layout() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      
      {/* Navbar */}
      <nav className="w-full bg-white dark:bg-gray-800 shadow p-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">

          <h1 className="text-xl font-bold">ProductivityX</h1>

          <div className="flex gap-6 items-center">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/todos">Todos</NavLink>
            <NavLink to="/github">Github</NavLink>
            <NavLink to="/weather">Weather</NavLink>

                        {user ? (
              <>
                <NavLink to="/profile" className="px-3 py-1 bg-indigo-600 text-white rounded-md">
                  Profile
                </NavLink>

                <button
                  onClick={logout}
                  className="px-3 py-1 bg-red-500 text-white rounded-md"
                >
                  Logout
                </button>
              </>
            ) : (
              <NavLink to="/login" className="px-3 py-1 bg-blue-600 text-white rounded-md">
                Login
              </NavLink>
            )}
          </div>
        </div>
      </nav>

      {/* ✅ MAIN CONTENT WRAPPER */}
      <main className="max-w-5xl mx-auto px-4 py-10">
        <Outlet />
      </main>
    </div>
  );
}
