import React from "react";
import Link from "next/link";
import styles from "./index.module.css";
import { Post } from "@/entities/types";

const PostsSection = async () => {
  const posts: Post[] = await (
    await fetch("http://localhost:3000/api/posts")
  ).json();

  return (
    <section className={styles.section}>
      <div className={`content ${styles.wrapper}`}>
        <div className={styles.info}>
          <h2>Recent posts</h2>
          <Link href={"/blog"}>View all</Link>
        </div>
        <div className={styles.inner}>
          {!posts ? (
            <h3>Posts Not Found</h3>
          ) : (
            posts?.map((elem: Post, index: number) => {
              if (index < 2)
                return (
                  <div className={styles.box} key={elem.title}>
                    <span>{elem.title}</span>
                    <div>
                      <span>{elem.data}</span>
                      <span>
                        {elem.category.map((name, index) => (
                          <React.Fragment key={name}>
                            {name}
                            {index === elem.category.length - 1 ? "" : ","}
                          </React.Fragment>
                        ))}
                      </span>
                    </div>
                    <p>{elem.description}</p>
                  </div>
                );
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default PostsSection;
