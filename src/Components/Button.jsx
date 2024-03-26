import React from "react";

// styles
import "./Button.css";

export default Button = ({
  bgColor = "#FFCE67",
  textColor = "#000000",
  hoverColor,
  icon,
  text="play vs player",
}) => {
  return (
    <button
      className="game-button"
      style={{
        backgroundColor: bgColor,
      }}
    >
      <h3
        className="heading-medium"
        style={{
          color: textColor,
        }}
      >
        {text}
      </h3>
      
      {icon && <img src={icon} alt="user-vs-user-icon" width="82" height="46"/>}
    </button>
  );
};
