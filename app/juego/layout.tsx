import AuthGuard from "../../components/AuthGuard";

export default function JuegoLayout({ children }: { children: React.ReactNode }) {
  return <AuthGuard>{children}</AuthGuard>;
}