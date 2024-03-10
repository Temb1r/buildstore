import { Work } from "@/entities/types";
import styles from "./index.module.css";
import Image from "next/image";

const WorksSection = async () => {
  const works = await (await fetch("http://localhost:3000/api/works")).json();

  return (
    <section>
      <div className={`content ${styles.wrapper}`}>
        <h2>Featured works</h2>
        <div className={styles.inner}>
          {!works.products ? (
            <h3>Works Not Found</h3>
          ) : (
            works.products.map((elem: Work, index: number) => {
              if (index < 3)
                return (
                  <div className={styles.box} key={elem.id}>
                    <Image
                      src={elem.thumbnail}
                      width={246}
                      height={148}
                      alt="Product"
                    />
                    <div className={styles.info}>
                      <span>{elem.title}</span>
                      <div>
                        <span>{elem.discountPercentage}</span>
                        <span>{elem.category}</span>
                      </div>
                      <p>{elem.description}</p>
                    </div>
                  </div>
                );
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default WorksSection;
