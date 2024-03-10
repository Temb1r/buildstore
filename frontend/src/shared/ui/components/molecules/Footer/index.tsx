import Link from "next/link";
import styles from "./index.module.css";
import FacebookIcon from "../../atoms/Icons/FacebookIcon";
import InstagramIcon from "../../atoms/Icons/InstagramIcon";
import TwitterIcon from "../../atoms/Icons/TwitterIcon";
import LinkedinIcon from "../../atoms/Icons/LinkedinIcon";

const Footer = () => {
  return (
    <footer>
      <div className={styles.content}>
        <nav>
          <Link href={"https://www.facebook.com/?locale=ru_RU"}>
            <FacebookIcon width={30} height={30} />
          </Link>
          <Link href={"https://www.instagram.com/"}>
            <InstagramIcon width={30} height={30} />
          </Link>
          <Link href={"https://twitter.com/?lang=ru"}>
            <TwitterIcon width={37} height={30} />
          </Link>
          <Link href={"https://www.linkedin.com/"}>
            <LinkedinIcon width={30} height={30} />
          </Link>
        </nav>
        <span>Copyright ©2020 All rights reserved </span>
      </div>
    </footer>
  );
};

export default Footer;
