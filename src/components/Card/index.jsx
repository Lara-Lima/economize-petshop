import styles from "./Card.module.css";

function Card({ title, value, distance }) {
  return (
    <div className={styles.card}>
      <h1>{title}</h1>
      <span>
        <strong>Valor:</strong> {value}
      </span>
      <span>
        <strong>Distância:</strong> {distance}
      </span>
    </div>
  );
}

export default Card;
