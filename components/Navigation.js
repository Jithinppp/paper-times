import Link from "next/link";
import styles from "../styles/navigation.module.css";

function Navigation() {
  return (
    <div className={styles.navContainer}>
      <h3 className={styles.logo}>PaperTimes</h3>
      <ul>
        <li className={styles.navItem}>
          <Link href={"/"}>Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link href={"/about"}>About</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
