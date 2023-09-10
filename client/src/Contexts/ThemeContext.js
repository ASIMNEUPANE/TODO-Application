import { createContext,useState,useContext} from "react"


export const ThemeContext = createContext(null);

export default function ThemeContextProvider({children}) {

    const [theme,setTheme]= useState("light-theme")
    const toggleTheme =()=>{}
  return (
    <>
    
    <ThemeContext.Provider value={{theme,setTheme,toggleTheme}}>{children}</ThemeContext.Provider>
    </>
  )
}


export const useThemeContext = ()=>{
    const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "Theme Context must be wrapped inside Theme context Provider"
    );
  }
  return context;
}