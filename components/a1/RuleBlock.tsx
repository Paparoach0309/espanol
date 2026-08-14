import { A1Rule } from "../../data/a1/types";
import styles from "../../app/a1/a1.module.css";

export default function RuleBlock({ rules }: { rules: A1Rule[] }) {
  return (
    <>
      {rules.map((rule, i) => (
        <section key={i} className={styles.section}>
          <h2>{rule.title}</h2>
          {rule.paragraphs.map((p, j) => (
            <p key={j}>{p}</p>
          ))}
          {rule.list && (
            <ul>
              {rule.list.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </>
  );
}