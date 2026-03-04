"use client";

import { ComponentType, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

type Role = "student" | "teacher";

interface Options {
  requiredRole?: Role;
}

export function withAuth<T extends object>(
  WrappedComponent: ComponentType<T>,
  options?: Options
) {
  return function ProtectedComponent(props: T) {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!loading) {
        if (!user) {
          router.replace("/login");
          return;
        }

        if (options?.requiredRole && user.role !== options.requiredRole) {
          router.replace("/");
        }
      }
    }, [user, loading, router, options]);

    if (loading || !user) {
      return (
        <div style={{ padding: 40 }}>
          <h2>Загрузка...</h2>
        </div>
      );
    }

    if (options?.requiredRole && user.role !== options.requiredRole) {
      return null;
    }

    return <WrappedComponent {...(props as T)} />;
  };
}
