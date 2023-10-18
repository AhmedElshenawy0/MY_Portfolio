"use client";

const { createContext, useState } = require("react");

export const ModeContext = createContext();

export const ModeProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");

  const toggleMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };
  return (
    <ModeContext.Provider value={{ mode, toggleMode }}>
      <div className={mode}>{children}</div>
    </ModeContext.Provider>
  );
};
