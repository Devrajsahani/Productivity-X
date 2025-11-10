import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Todos from "./pages/Todos.jsx";
import Github from "./pages/Github.jsx";
import Weather from "./pages/Weather.jsx";
import Layout from "./components/LayoutX.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "todos", element: <Todos /> },
      { path: "github", element: <Github /> },
      { path: "weather", element: <Weather /> },
    ],
  },
]);

export default router;
