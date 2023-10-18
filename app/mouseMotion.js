"use client";
import { createContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
export const MouseContext = createContext();

export const MouseProvider = ({ children }) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    const handleMouse = (e) => {
      setX(e.clientX - 12);
      setY(e.clientY - 10);
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <MouseContext.Provider value={{ x, y }}>
      <motion.div
        className="mask"
        animate={{ translateX: x, translateY: y }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      ></motion.div>
      {children}
    </MouseContext.Provider>
  );
};
