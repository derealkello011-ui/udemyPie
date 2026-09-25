import { type ReactNode } from "react";
import { useColorScheme } from "react-native";
import { ThemeColors, ThemeContext } from "./ThemeContext";

const darkColors: ThemeColors = {
    background: '#1a1a2e',
    header: '#242444',
    surface: '#2a2a4a',
    primary: '#4fc3f7',
    text: '#ffffff',
    textSecondary: '#a0a0b0',
    alert: '#ff5252',
    border: 'rgba(255, 255, 255, 0.1)',
    card: '#fca634',
    tabMuted: '#fff',
    success: '#04c408'
};

const lightColors: ThemeColors = {
    background: '#f4f7fb',
    header: '#ffffff',
    surface: '#ffffff',
    primary: '#087ea4',
    text: '#172033',
    textSecondary: '#61708a',
    alert: '#d9363e',
    border: 'rgba(23, 32, 51, 0.12)',
    card: '#069582',
    tabMuted: '#a9a4a4',
    success: '#ffd000'
};

export const ThemeProvider = ( { children }: { children: ReactNode } ) => {
    const colorScheme = useColorScheme();
    const isDark = colorScheme === 'dark';
    const colors = isDark ? darkColors : lightColors;

    return (
        <ThemeContext.Provider value={{isDark, colors}}>
            {children}
        </ThemeContext.Provider>
    );
};