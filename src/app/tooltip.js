import styles from "./css/clock.module.css";
export default function Tooltip({ cursorX, cursorY, timestamp }) {
  return (
    <span
      className={styles.tooltipText}
      style={{ left: cursorX, top: cursorY - 75 }}
    >
      {timestamp}
    </span>
  );
}
