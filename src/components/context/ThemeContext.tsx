import { createContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};
export const ThemeContext = createContext<ThemeContextType>({
  theme: "",
  toggleTheme: () => {},
});

const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("dark", "light");
    root.classList.add(theme);
  }, [theme]);
  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };
  return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>;
};
export default ThemeContextProvider;
