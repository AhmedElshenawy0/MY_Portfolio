import Link from "next/link";
import styles from "./footer.module.css";
import Image from "next/image";
import { TbBrandGithub } from "react-icons/tb";
import { FiLinkedin } from "react-icons/fi";

export default function Footer() {
  return (
    <div className={styles.Follow}>
      <h3>Follow Me</h3>
      <div className={styles.social_icon}>
        <Link
          href="https://www.linkedin.com/in/ahmed-elshenawy-134a81234/"
          target="_blank"
        >
          <FiLinkedin className={styles.icon} />
        </Link>
        <Link href="https://github.com/AhmedElshenawy0" target="_blank">
          <TbBrandGithub className={styles.icon} />
        </Link>
      </div>
      <p>©2023 Next.js Portfolio . Ahmed</p>
    </div>
  );
}
