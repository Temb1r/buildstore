import { headers } from "next/headers";
import styles from "./page.module.css";
import { redirect } from "next/navigation";

export default function Home() {
  const header = headers();
  const pathname = header.get("next-url");

  if (!pathname || pathname === "/") redirect("/login");
  return <></>;
}
