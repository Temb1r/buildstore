import Form from "@/shared/ui/components/molecules/Form";
import styles from "./page.module.css";

function Register() {
  return (
    <main>
      <section>
        <div className={styles.wrapper}>
          <Form auth={"sign up"} />
        </div>
      </section>
    </main>
  );
}

export default Register;
