import Link from "next/link";
import styles from "./page.module.css";

export default function NotFound() {
  return (
    <div className={styles.content}>
      <h1>Page Not Found</h1>
      <Link href={"/"}>Return to Home page</Link>
    </div>
  );
}
