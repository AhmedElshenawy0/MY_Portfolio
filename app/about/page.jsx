"use client";
import Image from "next/image";
import styles from "./about.module.css";
import { useEffect, useRef } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
export default function About() {
  const [typeEffect] = useTypewriter({
    words: ["About Me"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });
  return (
    <div className={styles.about}>
      <h2>
        {typeEffect}
        <Cursor />
      </h2>
      <div className={styles.container}>
        <div className={styles.content_container}>
          <p>
            My name is Ahmed Elshenawy,a junior Mern stack developer who uses
            coding to operate on both frontend and back-end systems. I am an
            ambitious and hardworking person,able to work with a variety of
            technology.Ability to diagnose problems and develop solutions.
          </p>
          <p>
            My work experience is Personal training on all my techniques.As a
            self-taught MERNstack developer,I have honed my skills in building
            dynamic and responsive web applications.Throughout my journey, I
            have gained proficiency in technologies such as React, ,Redux, RTK,
            Node.js,Express and MongoDB.
          </p>
      
        </div>
        <div className={styles.skills_container}>
          <h5>Skills</h5>
          <div className={styles.skills}>
            <Image
              src="/images/pngwing.com (1).png"
              alt="icon"
              width={30}
              height={30}
            />
            <p>HTML5</p>
          </div>
          <div className={styles.skills}>
            <Image
              src="/images/pngwing.com (2).png"
              alt="icon"
              width={30}
              height={30}
            />
            <p>Css3</p>
          </div>
          <div className={styles.skills}>
            <Image
              src="/images/Tailwind.png"
              alt="icon"
              width={30}
              height={30}
            />
            <p>Tailwind CSS</p>
          </div>
          <div className={styles.skills}>
            <Image src="/images/java.png" alt="icon" width={30} height={30} />
            <p>JavaScript</p>
          </div>
          <div className={styles.skills}>
            <Image
              src="/images/pngwing.com (3).png"
              alt="icon"
              width={30}
              height={30}
            />
            <p>React.js</p>
          </div>
          <div className={styles.skills}>
            <Image
              src="/images/nextjs.png"
              alt="icon"
              width={30}
              height={30}
            />
            <p>Next.js</p>
          </div>
          <div className={styles.skills}>
            <Image src="/images/redux.png" alt="icon" width={30} height={30} />
            <p>Redux toolkit</p>
          </div>
          <div className={styles.skills}>
            <Image
              src="/images/pngwing.com (4).png"
              alt="icon"
              width={30}
              height={30}
            />
            <p>Node.js</p>
          </div>
          <div className={styles.skills}>
            <Image
              src="/images/pngwing.com (5).png"
              alt="icon"
              width={30}
              height={30}
            />
            <p>Express.js</p>
          </div>
          <div className={styles.skills}>
            <Image
              src="/images/pngwing.com.png"
              alt="icon"
              width={30}
              height={30}
            />
            <p>MongoDB</p>
          </div>
        </div>
      </div>
    </div>
  );
}
