import React from "react";
import "./footer.css";
import LinkedIn from "@mui/icons-material/LinkedIn";
import GitHub from "@mui/icons-material/GitHub";
import { useTheme } from "../Context/ThemeContext";

const Footer = () => {
  const { bodyTheme } = useTheme();
  return (
    <div className="footer_container">
      @ 2024 - Designed by Luciano Bostal{" "}
      <a
        href="https://www.linkedin.com/in/luciano-bostal/"
        target="_blank"
        className="linkedin_icon"
      >
        <LinkedIn
          fontSize="large"
          style={{
            color: bodyTheme === "dark" ? "white" : "black",
            marginLeft: "20px",
          }}
        />
      </a>{" "}
      <a
        href="https://github.com/luchio198"
        target="_blank"
        className="linkedin_icon"
      >
        <GitHub
          fontSize="large"
          style={{
            color: bodyTheme === "dark" ? "white" : "black",
            marginLeft: "10px",
          }}
        />
      </a>
    </div>
  );
};

export default Footer;
