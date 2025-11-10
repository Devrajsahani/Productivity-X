import { NavLink, Outlet } from "react-router-dom";
console.log("✅ REAL LAYOUT FILE LOADED");


export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">

      {/* Navbar */}
      <nav className="w-full bg-white dark:bg-gray-800 shadow p-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">

          <h1 className="text-xl font-bold">ProductivityX </h1>

          <div className="flex gap-6">
            <NavLink className="hover:text-blue-600" to="/">Home</NavLink>
            <NavLink className="hover:text-blue-600" to="/todos">Todos</NavLink>
            <NavLink className="hover:text-blue-600" to="/github">Github</NavLink>
            <NavLink className="hover:text-blue-600" to="/weather">Weather</NavLink>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-10">
        <Outlet />
      </main>

    </div>
    
  );
}
