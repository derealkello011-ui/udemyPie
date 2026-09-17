import { createContext } from "react";

export interface ThemeColors {
    background: string;
    header: string;
    surface: string;
    primary: string;
    text: string;
    textSecondary: string;
    alert: string;
    border: string;
    card: string;
    tabMuted: string;
};

export interface ThemeColorsType {
    isDark: boolean;
    colors: ThemeColors;
};

export const ThemeContext = createContext<ThemeColorsType | null>( null );