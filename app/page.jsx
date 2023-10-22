"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { motion } from "framer-motion";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { useTypewriter, Cursor } from "react-simple-typewriter";
export default function Home() {
  const [typeEffect] = useTypewriter({
    words: ["A Mern Stack Developer"],
    loop: {},
    typeSpeed:100,
    deleteSpeed: 40,
  });
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3>
          Hi, I am <br />
          <span>Ahmed ELshenawy</span>
        </h3>
        <p className={styles.title}>
          {typeEffect}
          <Cursor />
        </p>
        <a href="/AhmedCV.pdf" className={styles.download}>
          Download My CV <FaCloudDownloadAlt />
        </a>
      </div>
      <motion.div
        transition={{ duration: 0.6 }}
        initial={{ opacity: 0, y: -400 }}
        animate={{ y: 0, opacity: 1 }}
        className={styles.image}
      >
        <Image
          src="/images/home.svg"
          width={500}
          height={450}
          alt="head-image"
          className={styles.img}
          priority
        />
      </motion.div>
    </div>
  );
}
