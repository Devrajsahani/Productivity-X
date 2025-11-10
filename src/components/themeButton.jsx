import { useContext } from "react";
import ThemeContext from "../contexts/themeContext";

export default function ThemeButton() {
  const { themeMode, lightTheme, darkTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={themeMode === "light" ? darkTheme : lightTheme}
      className="px-4 py-2 bg-gray-800 text-white rounded-lg"
    >
      {themeMode === "light" ? "Enable Dark Mode" : "Enable Light Mode"}
    </button>
  );
}
