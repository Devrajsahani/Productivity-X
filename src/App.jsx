import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";
import { ThemeProvider } from "./contexts/themeProvider.jsx";
import TodoProvider from "./contexts/todoProvider.jsx";

export default function App() {
  return (
    <ThemeProvider>
      <TodoProvider>
        <RouterProvider router={router} />
      </TodoProvider>
    </ThemeProvider>
  );
}
