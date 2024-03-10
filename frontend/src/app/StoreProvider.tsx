"use client";
import { AppStore, makeStore } from "@/shared/lib/store";
import { usePathname, useRouter } from "next/navigation";
import { useRef } from "react";
import { Provider } from "react-redux";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathName = usePathname();
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
    // const token = localStorage.getItem("token");

    // if (!token && pathName === "/") router.push("login");
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
