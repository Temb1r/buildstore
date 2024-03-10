"use client";
import { setToken } from "@/shared/lib/features/jwt/jwtSlice";
import { AppStore, makeStore } from "@/shared/lib/store";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
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
  }

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (pathName === "/" && !token) router.push("/login");
    if (token) storeRef.current!.dispatch(setToken(token));
  }, [pathName]);

  return <Provider store={storeRef.current}>{children}</Provider>;
}
