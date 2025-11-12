import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Todos from "./pages/Todos.jsx";
import Github from "./pages/Github.jsx";
import Weather from "./pages/Weather.jsx";
import Layout from "./components/Layout.jsx";
import Signup from "./pages/Signup.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Login from "./pages/Login.jsx";
import Profile from "./pages/Profile.jsx";
import EditProfile from "./pages/EditProfile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },

      {
        path: "todos",
        element: (
          <ProtectedRoute>
            <Todos />
          </ProtectedRoute>
        ),
      },

      { path: "github", element: <Github /> },
      { path: "weather", element: <Weather /> },
      { path: "signup", element: <Signup /> },
      { path: "login", element: <Login /> },
      {
  path: "profile",
  element: (
    <ProtectedRoute>
      <Profile />
    </ProtectedRoute>
  ),
},
{
  path: "edit-profile",
  element: (
    <ProtectedRoute>
      <EditProfile />
    </ProtectedRoute>
  ),
},
    ],
  },
]);

export default router;
