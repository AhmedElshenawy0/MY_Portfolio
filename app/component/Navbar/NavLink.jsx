import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";
const NavLink = ({ href, text }) => {
  const path = usePathname();
  const isActive = path === href;
  return (
    <Link className={`${isActive && styles.active} ${styles.links}`} href={href}>
      {text}
    </Link>
  );
};

export default NavLink;
