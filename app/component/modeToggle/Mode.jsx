"use client";
import Image from "next/image";
import styles from "./mode.module.css";
import { useContext } from "react";
import { ModeContext } from "@/app/context/ModeContext";
import { FiSun } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";
export default function Mode() {
  const { mode, toggleMode } = useContext(ModeContext);
  return (
    <div onClick={toggleMode} className={styles.container}>
      {mode === "dark" ? (
        <FiSun className={styles.sun} />
      ) : (
        <FaMoon className={styles.moon} />
      )}
    </div>
  );
}
