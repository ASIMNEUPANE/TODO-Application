
import { useThemeContext } from "./Contexts/ThemeContext";

export default function Navbar() {
  
  const { theme, setTheme } = useThemeContext();
  return (
    <div>
      MY Theme is {theme}
      <br />
      <button onClick={() => setTheme("dark-theme")}>DarkTheme</button>
      <button onClick={() => setTheme("light-theme")}>LightTheme</button>
    </div>
  );
}
