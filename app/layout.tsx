import "../styles/globals.css";
import LayoutWrapper from "../components/LayoutWrapper";

export const metadata = {
  title: "Subjuntivo B1",
  description: "Aprende el subjuntivo nivel B1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
