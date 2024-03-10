import Image from "next/image";
import styles from "./index.module.css";
import PersonImage from "@/assets/images/HeadSection/Person.png";

const HeadSection = () => {
  return (
    <section>
      <div className={`content ${styles.wrapper}`}>
        <div className={styles.inner}>
          <h1>Hi, I am John, Creative Technologist</h1>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <button className="button">Download Resume</button>
        </div>
        <Image src={PersonImage} alt="Person Image" width={243} height={243} />
      </div>
    </section>
  );
};

export default HeadSection;
