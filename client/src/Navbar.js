import { useThemeContext } from "./Contexts/ThemeContext";

export default function Navbar() {
  const { theme,  toggleTheme } = useThemeContext();
  return (
    <div>
      MY Theme is {theme}
      <br />
      <button onClick={toggleTheme}>Dark Theme</button>
      <button onClick={toggleTheme}>Light Theme</button>
    </div>
  );
}
