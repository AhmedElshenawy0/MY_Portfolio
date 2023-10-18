"use client";
import Image from "next/image";
import styles from "./project.module.css";
import { FaLocationArrow } from "react-icons/fa";
import Link from "next/link";
import { data } from "../data";
import LogoutIcon from "@mui/icons-material/Logout";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { MouseContext } from "../mouseMotion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
export default function Projects() {
  const [typeEffect] = useTypewriter({
    words: ["My Projects"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });
  return (
    <div className={styles.container}>
      <h2>
        {typeEffect} <Cursor />
      </h2>
      <div className={styles.allProjects}>
        {data.map((ele) => (
          <div className={styles.project} key={ele.id}>
            <div className={styles.photo}>
              <Image
                src={ele.image}
                width={200}
                height={150}
                alt={ele.title}
                className={styles.proImg}
              />
              <div></div>
            </div>
            <div className={styles.right_side}>
              <h3 className={styles.title}>{ele.title}</h3>

              <Link href={`/projects/${ele.id}`} className={styles.btn}>
                View <LogoutIcon />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
