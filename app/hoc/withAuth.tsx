"use client";

import { ComponentType, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

type Role = "student" | "teacher";

interface Options {
  requiredRole?: Role;
}

export function withAuth<P>(
  WrappedComponent: ComponentType<P>,
  options?: Options
) {
  return function ProtectedComponent(props: P) {
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
    }, [user, loading, router]);

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

    return <WrappedComponent {...props} />;
  };
}
