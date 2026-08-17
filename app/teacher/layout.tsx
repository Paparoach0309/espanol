import AuthGuard from "../../components/AuthGuard";
import { requireTeacher } from "../../lib/session";

export default async function TeacherLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await requireTeacher();
  return <AuthGuard>{children}</AuthGuard>;
}