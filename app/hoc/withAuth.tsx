"use client";

import { useEffect, useState, ComponentType } from "react";
import { useRouter } from "next/navigation";

export function withAuth<T extends object>(WrappedComponent: ComponentType<T>) {
  return function ProtectedComponent(props: T) {
    const router = useRouter();
    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => {
      const isLoggedIn = localStorage.getItem("isLoggedIn");

      if (!isLoggedIn) {
        router.push("/login");
      } else {
        setIsAuthorized(true);
      }
    }, [router]);

    if (!isAuthorized) {
      return null;
    }

    return <WrappedComponent {...(props as T)} />;
  };
}
