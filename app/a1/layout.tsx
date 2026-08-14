import AuthGuard from "../../components/AuthGuard";

export default function A1Layout({ children }: { children: React.ReactNode }) {
  return <AuthGuard>{children}</AuthGuard>;
}