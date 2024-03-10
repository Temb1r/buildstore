"use client";
import { setToken } from "@/shared/lib/features/jwt/jwtSlice";
import { AppStore, makeStore } from "@/shared/lib/store";
import { redirect, usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { Provider } from "react-redux";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  const storeRef = useRef<AppStore>();
  const token = localStorage.getItem("token");

  if (!storeRef.current) {
    storeRef.current = makeStore();
  }
  if (pathName === "/" && !token) redirect("/login");
  if (token) storeRef.current!.dispatch(setToken(token));

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (pathName === "/" && !token) redirect("/login");
    if (token) storeRef.current!.dispatch(setToken(token));
  }, [pathName]);

  return <Provider store={storeRef.current}>{children}</Provider>;
}
