"use client";
import { useAppSelector } from "@/shared/lib/hooks";
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
  }, [pathName]);

  return <Provider store={storeRef.current}>{children}</Provider>;
}
