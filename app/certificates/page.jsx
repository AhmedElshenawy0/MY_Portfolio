"use client";
import Image from "next/image";
import styles from "./certificates.module.css";
import Link from "next/link";
import { BsMeta } from "react-icons/bs";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Certificates() {
  const [typeEffect] = useTypewriter({
    words: ["Certificates"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });
  return (
    <div className={styles.container}>
     
      <div className={styles.certificate}>
        <Image src="/images/meta.jpg" width={350} height={250} alt="CV" />
        <div className={styles.right_side}>
          <h3>
            <BsMeta />
            Meta Front-End Developer
          </h3>
          <Link
            href="https://coursera.org/share/ee1c5d9e07dc80ae9aafa2ba1fd4fb80"
            target="_blank"
          >
            View Certificate
          </Link>
        </div>
      </div>
    </div>
  );
}
