import styles from './formacion.module.css'

export default function Formacion() {
  return (
    <div className={styles.container}>
      <h2>Formación del Presente de Subjuntivo</h2>

      <section>
        <h3>Paso 1</h3>
        <p>Toma la forma "yo" del presente.</p>
        <p>hablo → habl-</p>
      </section>

      <section>
        <h3>Paso 2</h3>
        <p>Quita la -o.</p>
      </section>

      <section>
        <h3>Paso 3</h3>
        <p>Añade terminaciones opuestas:</p>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>-AR</th>
              <th>-ER / -IR</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>e</td>
              <td>a</td>
            </tr>
            <tr>
              <td>es</td>
              <td>as</td>
            </tr>
            <tr>
              <td>e</td>
              <td>a</td>
            </tr>
            <tr>
              <td>emos</td>
              <td>amos</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h3>⚡ Verbos Irregulares Importantes (B1)</h3>
        <ul>
          <li>ser → sea</li>
          <li>ir → vaya</li>
          <li>tener → tenga</li>
          <li>hacer → haga</li>
          <li>decir → diga</li>
          <li>poder → pueda</li>
        </ul>
      </section>
    </div>
  )
}