"use client";
import { signIn } from "@/shared/lib/actions";
import React, { useEffect } from "react";
import styles from "./index.module.css";
import { useFormState } from "react-dom";
import { useAppDispatch } from "@/shared/lib/hooks";
import { setToken } from "@/shared/lib/features/jwt/jwtSlice";
import { useRouter } from "next/navigation";

const initialState = {
  message: undefined,
};

const Form = ({ auth }: { auth: "sign up" | "sign in" }) => {
  const [state, formAction] = useFormState(signIn, initialState);
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) localStorage.removeItem("token");
    if (state.success) {
      localStorage.setItem("token", state.token);
      dispatch(setToken(state.token));
      router.push("/");
    }
  }, [state]);

  return (
    <form
      action={formAction}
      method="POST"
      //   encType="multipart/form-data"
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
        <p aria-live="polite" className={styles.error}>
          {state.message}
        </p>
      )}
      <button type="submit" className="button">
        Send
      </button>
    </form>
  );
};

export default Form;
