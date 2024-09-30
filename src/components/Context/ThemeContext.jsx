import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [bodyTheme, setBodyTheme] = useState("dark");

  const setDarkTheme = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    setBodyTheme("dark");
  };
  const setLightTheme = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    setBodyTheme("light");
  };

  useEffect(() => {
    if (bodyTheme === "light") {
      setLightTheme();
      document.getElementById("darkmode-toggle").checked = true;
    } else {
      setDarkTheme();
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ bodyTheme, setDarkTheme, setLightTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
