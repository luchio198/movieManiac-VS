import React from "react";

import "./DarkMode.css";
import Sun from "../../assets/Sun.svg?react";
import Moon from "../../assets/Moon.svg?react";
import { useTheme } from "../Context/ThemeContext";

const DarkMode = () => {
  const { setDarkTheme, setLightTheme } = useTheme();

  const toggleTheme = (e) => {
    if (e.target.checked) {
      setLightTheme();
    } else {
      setDarkTheme();
    }
  };

  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <Sun />
        <Moon />
      </label>
    </div>
  );
};

export default DarkMode;
