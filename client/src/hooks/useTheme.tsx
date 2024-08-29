import { createContext, ReactNode, useContext, useState } from "react";

interface themeContextData {
    theme: "light" | "dark";
    toggleTheme: () => void;
}


const ThemeContext = createContext<themeContextData>({} as themeContextData);


export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<"light" | "dark">("dark");

    function toggleTheme() {
        setTheme(theme === "light" ? "dark" : "light");
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
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