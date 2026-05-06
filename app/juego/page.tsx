"use client";
import React, { useEffect, useState } from "react";
import styles from "./juegoOraciones.module.css";

type WordItem = { id: string; text: string };
type Sentence = { id: number; words: string[] };

const SENTENCES: Sentence[] = [
  { id: 1, words: ["Yo", "soy", "Ana"] },
  { id: 2, words: ["Me", "llamo", "Luis"] },
  { id: 3, words: ["Tengo", "cinco", "años"] },
  { id: 4, words: ["Soy", "un", "niño"] },
  { id: 5, words: ["Ella", "es", "mi", "amiga"] },
  { id: 6, words: ["Él", "se", "llama", "Marco"] },
  { id: 7, words: ["Vivo", "en", "España"] },
  { id: 8, words: ["Me", "gusta", "jugar"] },
  { id: 9, words: ["Me", "gusta", "el", "perro"] },
  { id: 10, words: ["Tengo", "una", "pelota"] },
  { id: 11, words: ["Esta", "es", "una", "manzana"] },
  { id: 12, words: ["Quiero", "agua", "por", "favor"] },
  { id: 13, words: ["Gracias", "por", "ayudarme"] },
  { id: 14, words: ["Buenas", "noches", "mamá"] },
  { id: 15, words: ["¿Dónde", "está", "el", "libro?"] },
  { id: 16, words: ["Abre", "la", "ventana"] },
  { id: 17, words: ["Cierra", "la", "puerta"] },
  { id: 18, words: ["Vamos", "a", "la", "escuela"] },
  { id: 19, words: ["Hoy", "hace", "sol"] },
  { id: 20, words: ["Está", "lloviendo", "mucho"] },
  { id: 21, words: ["Me", "siento", "feliz"] },
  { id: 22, words: ["Estoy", "cansado"] },
  { id: 23, words: ["Tengo", "hambre", "ahora"] },
  { id: 24, words: ["Quiero", "comer", "pizza"] },
  { id: 25, words: ["El", "gato", "es", "blanco"] },
  { id: 26, words: ["La", "casa", "es", "grande"] },
  { id: 27, words: ["Es", "mi", "hermana", "pequeña"] },
  { id: 28, words: ["Él", "tiene", "una", "bicicleta"] },
  { id: 29, words: ["Lee", "un", "cuento"] },
  { id: 30, words: ["Dibuja", "un", "sol"] },
  { id: 31, words: ["Cuenta", "hasta", "diez"] },
  { id: 32, words: ["Salta", "muy", "alto"] },
  { id: 33, words: ["Baila", "con", "música"] },
  { id: 34, words: ["Escucha", "la", "canción"] },
  { id: 35, words: ["Lávate", "las", "manos"] },
  { id: 36, words: ["Ponte", "los", "zapatos"] },
  { id: 37, words: ["Ven", "aquí", "por", "favor"] },
  { id: 38, words: ["Comparte", "tus", "juguetes"] },
  { id: 39, words: ["No", "toques", "eso"] },
  { id: 40, words: ["Te", "quiero", "mucho"] },
];

function shuffle<T>(arr: T[]): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function JuegoOraciones() {
  const [index, setIndex] = useState(0);
  const [pool, setPool] = useState<WordItem[]>([]);
  const [slots, setSlots] = useState<Array<WordItem | null>>([]);
  const [checked, setChecked] = useState<boolean[] | null>(null);
  const [hinted, setHinted] = useState<number[]>([]);
  const sentence = SENTENCES[index];

  useEffect(() => {
    initSentence();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  function initSentence() {
    const words = sentence.words.map((w, i) => ({
      id: `${sentence.id}-${i}`,
      text: w,
    }));
    setPool(shuffle(words));
    setSlots(Array(words.length).fill(null));
    setChecked(null);
    setHinted([]);
  }

  type DPayload = { from: "pool" | "slot"; id: string; slotIndex?: number };

  function onDragStart(e: React.DragEvent, payload: DPayload) {
    e.dataTransfer.setData("application/json", JSON.stringify(payload));
    if (e.dataTransfer.setDragImage) {
      const node = document.createElement("div");
      node.style.padding = "6px 10px";
      node.style.background = "#fff";
      node.style.border = "1px solid #ddd";
      node.style.position = "absolute";
      node.style.top = "-9999px";
      node.textContent = payload.id;
      document.body.appendChild(node);
      e.dataTransfer.setDragImage(node, 10, 10);
      setTimeout(() => document.body.removeChild(node), 0);
    }
  }

  function onDropOnSlot(e: React.DragEvent, targetIndex: number) {
    e.preventDefault();
    const raw = e.dataTransfer.getData("application/json");
    if (!raw) return;
    try {
      const data: DPayload = JSON.parse(raw);

      if (data.from === "pool") {
        const item = pool.find((p) => p.id === data.id);
        if (!item) return;
        const newPool = pool.filter((p) => p.id !== data.id);
        const newSlots = slots.slice();
        const existing = newSlots[targetIndex];
        newSlots[targetIndex] = item;
        if (existing) {
          if (!newPool.some((p) => p.id === existing.id)) {
            newPool.push(existing);
          }
        }
        setPool(newPool);
        setSlots(newSlots);
      } else if (data.from === "slot") {
        const fromIdx = data.slotIndex!;
        if (fromIdx === undefined) return;
        const newSlots = slots.slice();
        const fromItem = newSlots[fromIdx];
        if (!fromItem) return;
        const targetItem = newSlots[targetIndex];
        newSlots[targetIndex] = fromItem;
        newSlots[fromIdx] = targetItem ?? null;
        setSlots(newSlots);
      }

      setChecked(null);
      setHinted([]);
    } catch (err) {
      // ignore
    }
  }

  function onDropOnPool(e: React.DragEvent) {
    e.preventDefault();
    const raw = e.dataTransfer.getData("application/json");
    if (!raw) return;
    try {
      const data: DPayload = JSON.parse(raw);
      if (data.from === "slot") {
        const fromIdx = data.slotIndex!;
        if (fromIdx === undefined) return;
        const item = slots[fromIdx];
        if (!item) return;
        const newSlots = slots.slice();
        newSlots[fromIdx] = null;
        const newPool = pool.some((p) => p.id === item.id)
          ? pool.slice()
          : [...pool, item];
        setSlots(newSlots);
        setPool(newPool);
      }
      setChecked(null);
      setHinted([]);
    } catch {}
  }

  function allowDrop(e: React.DragEvent) {
    e.preventDefault();
  }

  function checkAnswer() {
    const perSlot = slots.map((s, i) =>
      s ? s.text === sentence.words[i] : false
    );
    setChecked(perSlot);
  }

  function resetSentence() {
    initSentence();
  }

  function goNext() {
    setIndex((i) => Math.min(i + 1, SENTENCES.length - 1));
  }
  function goPrev() {
    setIndex((i) => Math.max(i - 1, 0));
  }

  function placeFromPoolToFirstEmpty() {
    if (pool.length === 0) return;
    const item = pool[0];
    const emptyIdx = slots.findIndex((s) => s === null);
    if (emptyIdx === -1) return;
    const newPool = pool.slice(1);
    const newSlots = slots.slice();
    newSlots[emptyIdx] = item;
    setPool(newPool);
    setSlots(newSlots);
    setChecked(null);
    setHinted([]);
  }

  function revealOneHint() {
    const incorrectIndices = slots
      .map((s, i) => ({ s, i }))
      .filter((x) => x.s?.text !== sentence.words[x.i])
      .map((x) => x.i);
    if (incorrectIndices.length === 0) return;
    const chooseIdx =
      incorrectIndices[Math.floor(Math.random() * incorrectIndices.length)];
    const targetText = sentence.words[chooseIdx];

    const foundInPoolIdx = pool.findIndex((p) => p.text === targetText);
    if (foundInPoolIdx !== -1) {
      const item = pool[foundInPoolIdx];
      const newPool = pool.filter((p) => p.id !== item.id);
      const newSlots = slots.slice();
      const existing = newSlots[chooseIdx];
      newSlots[chooseIdx] = item;
      if (existing) {
        if (!newPool.some((p) => p.id === existing.id)) newPool.push(existing);
      }
      setPool(newPool);
      setSlots(newSlots);
    } else {
      const inSlotIdx = slots.findIndex(
        (s, i) => s?.text === targetText && i !== chooseIdx
      );
      if (inSlotIdx !== -1) {
        const newSlots = slots.slice();
        const item = newSlots[inSlotIdx];
        const targetExisting = newSlots[chooseIdx];
        newSlots[chooseIdx] = item ?? null;
        newSlots[inSlotIdx] = targetExisting ?? null;
        setSlots(newSlots);
      }
    }

    setHinted((prev) => Array.from(new Set([...prev, chooseIdx])));
    setChecked(null);
  }

  function showAnswer() {
    const targetWords = sentence.words.slice();
    const allItems: WordItem[] = [
      ...slots.filter(Boolean).map((s) => s as WordItem),
      ...pool,
    ];
    const newSlots: Array<WordItem | null> = targetWords.map((tw) => {
      const idx = allItems.findIndex((it) => it.text === tw);
      if (idx !== -1) {
        return allItems.splice(idx, 1)[0];
      }
      return null;
    });
    setSlots(newSlots);
    setPool(allItems);
    setChecked(
      newSlots.map((s, i) => (s ? s.text === sentence.words[i] : false))
    );
    setHinted(Array.from(newSlots.map((_, i) => i)));
  }

  const overallCorrect = checked ? checked.every(Boolean) : false;

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Собери предложение</h1>

      <p className={styles.subtitle}>
        Уровень: Начальный. Перетяните слова из пула в пустые ячейки, чтобы
        составить правильное предложение.
      </p>

      <div className={styles.card} style={{ marginBottom: 12 }}>
        <strong>Инструкция по работе с заданиями:</strong>
        <ol style={{ margin: "8px 0 0 18px", color: "var(--muted)" }}>
          <li>
            Перетащите слова из блока со словами в пустые ячейки в нужном
            порядке.
          </li>
          <li>
            Нажмите «Проверить», чтобы увидеть, какие слова стоят правильно.
          </li>
          <li>
            «Показать подсказку» автоматически ставит одно правильное слово на
            место.
          </li>
          <li>«Показать ответ» заполнит все ячейки правильной фразой.</li>
          <li>
            Если устройство не поддерживает перетаскивание, используйте кнопку
            «(Для сенс.) поместить слово» — она поместит слово из пула в первую
            свободную ячейку.
          </li>
        </ol>
      </div>

      <div className={styles.controls}>
        <button onClick={goPrev} disabled={index === 0} className={styles.btn}>
          ← Предыдущее
        </button>
        <span className={styles.progress}>
          {index + 1} / {SENTENCES.length}
        </span>
        <button
          onClick={goNext}
          disabled={index === SENTENCES.length - 1}
          className={styles.btn}
        >
          Следующее →
        </button>
      </div>

      <div className={styles.card}>
        <div className={styles.meta}>
          <strong>Предложение №{sentence.id}</strong>
          <div className={styles.hint}>Слов: {sentence.words.length}</div>
        </div>

        <div className={styles.slots}>
          {slots.map((s, i) => {
            const status = checked ? (checked[i] ? "correct" : "wrong") : null;
            const isHinted = hinted.includes(i);
            return (
              <div
                key={i}
                className={`${styles.slot} ${
                  status === "correct"
                    ? styles.correctSlot
                    : status === "wrong"
                    ? styles.wrongSlot
                    : ""
                } ${isHinted ? styles.hintedSlot : ""}`}
                onDragOver={allowDrop}
                onDrop={(e) => onDropOnSlot(e, i)}
              >
                {s ? (
                  <div
                    draggable
                    onDragStart={(e) =>
                      onDragStart(e, { from: "slot", id: s.id, slotIndex: i })
                    }
                    className={`${styles.word} ${
                      status === "correct"
                        ? styles.correctWord
                        : status === "wrong"
                        ? styles.wrongWord
                        : ""
                    } ${isHinted ? styles.hintedWord : ""}`}
                  >
                    {s.text}
                    {checked && checked[i] && (
                      <span className={styles.mark}>✓</span>
                    )}
                    {checked && !checked[i] && (
                      <span className={styles.markBad}>✗</span>
                    )}
                  </div>
                ) : (
                  <div className={styles.placeholder}>перетащи сюда</div>
                )}
              </div>
            );
          })}
        </div>

        <div
          className={styles.pool}
          onDragOver={allowDrop}
          onDrop={onDropOnPool}
          role="list"
          aria-label="Пул слов"
        >
          {pool.map((p) => (
            <div
              key={p.id}
              draggable
              onDragStart={(e) => onDragStart(e, { from: "pool", id: p.id })}
              className={styles.poolWord}
            >
              {p.text}
            </div>
          ))}
          {pool.length === 0 && (
            <div className={styles.poolEmpty}>Пул пуст</div>
          )}
        </div>

        <div className={styles.actions}>
          <button onClick={checkAnswer} className={styles.primary}>
            Проверить
          </button>
          <button onClick={resetSentence} className={styles.btn}>
            Сбросить
          </button>
          <button onClick={placeFromPoolToFirstEmpty} className={styles.small}>
            (Для сенс.) поместить слово
          </button>
          <button onClick={revealOneHint} className={styles.hintBtn}>
            Показать подсказку
          </button>
          <button onClick={showAnswer} className={styles.dangerBtn}>
            Показать ответ
          </button>
        </div>

        {checked !== null && (
          <div className={overallCorrect ? styles.resultOk : styles.resultBad}>
            {overallCorrect
              ? "Отлично! Предложение составлено верно."
              : "Некоторые слова на неправильных местах."}
          </div>
        )}

        <div className={styles.note}>
          Совет: используйте «Показать подсказку», чтобы открыть одно правильное
          слово; «Показать ответ» заполнит всю фразу.
        </div>
      </div>
    </div>
  );
}
