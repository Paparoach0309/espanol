import Link from "next/link";

export default function LearningFlow() {
  return (
    <div style={{ padding: 40 }}>
      <h2>Ruta de Aprendizaje B1</h2>

      <ol>
        <li>
          📚 <Link href="/explicacion">Estudiar teoría</Link>
        </li>
        <li>
          🧠 <Link href="/formacion">Aprender formación</Link>
        </li>
        <li>
          🎯 <Link href="/ejercicios">Practicar ejercicios</Link>
        </li>
        <li>
          ⏱ <Link href="/test">Modo test</Link>
        </li>
        <li>
          📊 <Link href="/analytics">Revisar errores</Link>
        </li>
      </ol>
    </div>
  );
}
