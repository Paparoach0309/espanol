import Link from "next/link";

export default function LearningFlow() {
  return (
    <div style={{ padding: 40 }}>
      <h2>Ruta de Aprendizaje</h2>

      <h3>🟢 Nivel A1 — Español básico</h3>
      <ol>
        <li>
          📚 <Link href="/a1/sustantivo">Существительное: род</Link>
        </li>
        <li>
          📚 <Link href="/a1/adjetivo">Прилагательное</Link>
        </li>
        <li>
          📚 <Link href="/a1/articulos">Артикли</Link>
        </li>
        <li>
          📚 <Link href="/a1/pronombres">Личные местоимения</Link>
        </li>
        <li>
          📝 <Link href="/a1/test-4temas">Тест по 4 темам</Link>
        </li>
        <li>
          📚 <Link href="/a1/preposiciones">Простые предлоги</Link>
        </li>
        <li>
          📚 <Link href="/a1/ser-estar">Глагол ser / estar</Link>
        </li>
        <li>
          🏁 <Link href="/a1/test-final">Итоговый тест по всем темам</Link>
        </li>
      </ol>

      <h3 style={{ marginTop: 30 }}>🔵 Nivel B1 — Subjuntivo</h3>
      <ol>
        <li>
          📚 <Link href="/subjuntivo/explicacion">Estudiar teoría</Link>
        </li>
        <li>
          🧠 <Link href="/subjuntivo/formacion">Aprender formación</Link>
        </li>
        <li>
          🎯 <Link href="/subjuntivo/ejercicios">Practicar ejercicios</Link>
        </li>
        <li>
          ⏱ <Link href="/subjuntivo/test">Modo test</Link>
        </li>
        <li>
          📊 <Link href="/analytics">Revisar errores</Link>
        </li>
      </ol>
    </div>
  );
}