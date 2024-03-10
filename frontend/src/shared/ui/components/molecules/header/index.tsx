"use client";
import Link from "next/link";
import styles from "./index.module.css";
import { useState } from "react";
import BurgerIcon from "../../atoms/Icons/BurgerIcon";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <BurgerIcon
          width={30}
          height={20}
          className={styles.menu}
          onClick={() => setIsOpen((e) => !e)}
        />
        <nav className={`${styles.wrapper} ${!isOpen && styles.close}`}>
          <Link href={"/works"}>Works</Link>
          <Link href={"/blog"}>Blog</Link>
          <Link href={"/contact"}>Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
