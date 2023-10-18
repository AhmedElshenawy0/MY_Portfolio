import Link from "next/link";
import styles from "./pro.module.css";
import Image from "next/image";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { data } from "@/app/data";
import { Autour_One } from "next/font/google";
import { BiTimeFive } from "react-icons/bi";
const inter = Autour_One({ weight: ["400"], subsets: ["latin"] });

export default function Project({ params }) {
  const newData = data[params.id];

  return (
    <div className={styles.container}>
      <h3>{newData.title}</h3>
      <p className={styles.time}>
        <BiTimeFive />
        {newData.time}
      </p>
      <div className={styles.links_container}>
        <div className={styles.image_container}>
          <Image
            src={newData.image}
            width={250}
            height={200}
            alt="github-link"
            className={styles.image}
          />
          <div className={styles.view}>
            <Link
              target="_blank"
              href={newData.liveUrl}
              className={`${inter.className} ${styles.demo}`}
            >
              View Demo
            </Link>
            <Link
              target="_blank"
              href={newData.githubUrl}
              className={`${inter.className} ${styles.code}`}
            >
              View Code
            </Link>
          </div>
        </div>
        {/* <Link
          href={newData.githubUrl}
          className={styles.image_container}
          target="_blank"
        >
          <Image
            src={newData.source}
            width={250}
            height={200}
            alt={newData.title}
            className={styles.image}
          />
          <div className={styles.view}>
            <button className={inter.className}>View Source Code</button>
            <button className={inter.className}>View Source Code</button>
          </div>
          <div className={styles.cover}></div>
        </Link> */}
      </div>
      <h3>Tools & Technologies</h3>
      <p className={styles.tech}>{newData.skills}</p>
    </div>
  );
}
