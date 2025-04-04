import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({children}) {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light")

    useEffect(()=>{
        document.body.className = theme;
        localStorage.setItem("theme",theme)
    },[theme])

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return <ThemeContext.Provider value = {{theme, toggleTheme}}>
        {children}
    </ThemeContext.Provider>
}
export const useTheme = () => useContext(ThemeContext);