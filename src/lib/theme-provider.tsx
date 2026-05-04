"use client";

import { createContext, useContext, useEffect, useState } from "react";

type ThemeName = "default" | "catppuccin" | "marshmallow" | "material" | "vscode";
type ThemeMode = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultThemeName?: ThemeName;
  defaultMode?: ThemeMode;
};

type ThemeProviderState = {
  themeName: ThemeName;
  mode: ThemeMode;
  setThemeName: (themeName: ThemeName) => void;
  setMode: (mode: ThemeMode) => void;
  theme: ThemeMode;
  setTheme: (mode: ThemeMode) => void;
};

const initialState: ThemeProviderState = {
  themeName: "default",
  mode: "dark",
  setThemeName: () => null,
  setMode: () => null,
  theme: "dark",
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultThemeName = "default",
  defaultMode = "dark",
  ...props
}: ThemeProviderProps) {
  const [themeName, setThemeNameState] = useState<ThemeName>(
    () => (typeof window !== "undefined" && (localStorage.getItem("ui-theme-name") as ThemeName)) || defaultThemeName
  );

  const [mode, setModeState] = useState<ThemeMode>(
    () => (typeof window !== "undefined" && (localStorage.getItem("ui-theme-mode") as ThemeMode)) || defaultMode
  );

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("theme-default", "theme-catppuccin", "theme-marshmallow", "theme-material", "theme-vscode", "light", "dark");
    root.classList.add(`theme-${themeName}`);

    if (mode === "system") {
      const systemMode = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      root.classList.add(systemMode);
      return;
    }

    root.classList.add(mode);
  }, [themeName, mode]);

  const setThemeName = (newThemeName: ThemeName) => {
    localStorage.setItem("ui-theme-name", newThemeName);
    setThemeNameState(newThemeName);
  };

  const setMode = (newMode: ThemeMode) => {
    localStorage.setItem("ui-theme-mode", newMode);
    setModeState(newMode);
  };

  const value = {
    themeName,
    mode,
    setThemeName,
    setMode,
    theme: mode,
    setTheme: setMode,
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
