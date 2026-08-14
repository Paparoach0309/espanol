"use client";
import Link from "next/link";
import "../styles/globals.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/">Inicio</Link>
      <Link href="/a1">Nivel A1</Link>
      <Link href="/subjuntivo">Subjuntivo B1</Link>
      <Link href="/juego">Juego</Link>
      <Link href="/analytics">Analítica</Link>
      <Link href="/learning">Ruta</Link>
      <Link href="/teacher">Profesor</Link>
    </nav>
  );
}