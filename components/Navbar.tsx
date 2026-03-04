"use client";
import Link from "next/link";
import "../styles/globals.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/">Inicio</Link>
      <Link href="/explicacion">Explicación</Link>
      <Link href="/formacion">Formación</Link>
      <Link href="/ejercicios">Ejercicios</Link>
    </nav>
  );
}
