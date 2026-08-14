"use client";
import { useState } from "react";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import "../styles/globals.css";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Inicio" },
    { href: "/a1", label: "Nivel A1" },
    { href: "/subjuntivo", label: "Subjuntivo B1" },
    { href: "/juego", label: "Juego" },
    { href: "/analytics", label: "Analítica" },
    { href: "/learning", label: "Ruta" },
  ];

  if (user?.role === "teacher") {
    links.push({ href: "/teacher", label: "Profesor" });
  }

  const close = () => setOpen(false);

  return (
    <nav className="navbar">
      <button
        className="navToggle"
        onClick={() => setOpen((o) => !o)}
        aria-label="Меню"
      >
        {open ? "✕" : "☰"}
      </button>

      <div className={`navLinks ${open ? "open" : ""}`}>
        {user ? (
          <>
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={close}>
                {l.label}
              </Link>
            ))}
            <button className="navLogout" onClick={logout}>
              Salir
            </button>
          </>
        ) : (
          <Link href="/login" onClick={close}>
            Entrar
          </Link>
        )}
      </div>
    </nav>
  );
}