"use client";
import Link from "next/link";
import styles from "./navbar.module.css";
import Mode from "../modeToggle/Mode";
import Image from "next/image";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import NavLink from "./NavLink";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const path = usePathname();
  console.log(path);
  return (
    <div className={styles.container}>
      <Link href={"/"} className={styles.logo}>
        <Image
          src="/images/iconA.png"
          width={30}
          height={30}
          alt="icon"
          className={styles.iconA}
        />
        Ahmed
      </Link>
      <ul style={{ clipPath: menu && "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)" }}>
        <li onClick={() => setMenu(false)}>
          <NavLink className={styles.links} href="/projects" text="Projects" />
        </li>
        <li onClick={() => setMenu(false)}>
          <NavLink className={styles.links} href="/about" text="About Me" />
        </li>
        <li onClick={() => setMenu(false)}>
          <NavLink className={styles.links} href="/certificates" text="Certificates" />
        </li>
        <li onClick={() => setMenu(false)}>
          <NavLink className={styles.links} href="/contact" text="Contact" />
        </li>
      </ul>
      <div className={styles.menu_mode}>
        <MenuIcon
          onClick={() => setMenu((prev) => !prev)}
          className={styles.bar}
        />
        <Mode />
      </div>
    </div>
  );
}
