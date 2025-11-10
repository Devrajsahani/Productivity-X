import { NavLink } from "react-router-dom";


console.log("HOME JSX LOADED");

export default function Home() {
  return (
    <div className="text-center py-20">
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
        Welcome to ProductivityX
      </h1>

      <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl mx-auto mb-10">
        A multi-tool productivity dashboard built with React.  
        Manage your tasks, analyze GitHub profiles, convert currencies,  
        and much more — all in one place.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mt-6">
        <NavLink
          to="/todos"
          className="px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Manage Todos
        </NavLink>

        <NavLink
          to="/github"
          className="px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-gray-900"
        >
          GitHub Analyzer
        </NavLink>

        <NavLink
          to="/weather"
          className="px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-gray-900"
        >
          Weather report
        </NavLink>

      </div>
    </div>
  );
}
