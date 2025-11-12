import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";
import { ThemeProvider } from "./contexts/themeProvider.jsx";
import TodoProvider from "./contexts/todoProvider.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
      <TodoProvider>
        <RouterProvider router={router} />
      </TodoProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
