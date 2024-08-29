import { createContext, ReactNode, useContext, useState } from "react";

interface themeContextData {
    isDarkMode: boolean;
    toggleTheme: () => void;
}


const ThemeContext = createContext<themeContextData>({} as themeContextData);


export function ThemeProvider({ children }: { children: ReactNode }) {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

    function toggleTheme() {
        setIsDarkMode(!isDarkMode);
        console.log(isDarkMode)
    }


    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeContextProvider");
    }
    return context;
}