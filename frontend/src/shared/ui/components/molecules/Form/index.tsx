"use client";
import { signIn, signUp } from "@/shared/lib/actions";
import React, { useEffect } from "react";
import styles from "./index.module.css";
import { useFormState } from "react-dom";
import { useAppDispatch } from "@/shared/lib/hooks";
import { setToken } from "@/shared/lib/features/jwt/jwtSlice";
import { useRouter } from "next/navigation";
import Link from "next/link";

const initialState = {
  message: undefined,
};

const Form = ({ auth }: { auth: "sign up" | "sign in" }) => {
  const [state, formAction] = useFormState(
    auth === "sign in" ? signIn : signUp,
    initialState
  );
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) localStorage.removeItem("token");
    if (state.token) {
      localStorage.setItem("token", state.token);
      dispatch(setToken(state.token));
      router.push("/");
    }
  }, [state]);

  return (
    <form
      action={formAction}
      method="POST"
      encType="multipart/form-data"
      className={styles.wrapper}
    >
      <span className={styles.title}>{auth.toUpperCase()}</span>
      <label>
        Email: <input type="email" name="email" required />
      </label>
      <label>
        Password:{" "}
        <input type="password" name="password" minLength={6} required />
      </label>
      {state?.message && (
        <p
          aria-live="polite"
          className={state.success ? styles.success : styles.error}
        >
          {state.message}
        </p>
      )}
      <button type="submit" className="button">
        Send
      </button>
      <p className={styles.message}>
        {auth === "sign in" ? (
          <>
            {"Don't"} have an account yet?{" "}
            <Link href={"/register"}>Register now</Link>
          </>
        ) : (
          <>
            Already have an account? <Link href={"/login"}>Sign in</Link>
          </>
        )}
      </p>
    </form>
  );
};

export default Form;
