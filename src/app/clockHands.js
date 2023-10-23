import styles from "./css/clockHand.module.css";

export default function ClockHand({ time }) {
  return (
    <>
      <div
        className={styles.secondHand}
        style={{ transform: `rotateZ(${time.getSeconds() * 6}deg)` }}
      ></div>
      <div
        className={styles.hourHand}
        style={{ transform: `rotateZ(${time.getHours() * 30}deg)` }}
      ></div>
      <div
        className={styles.minuteHand}
        style={{ transform: `rotateZ(${time.getMinutes() * 6}deg)` }}
      ></div>
    </>
  );
}
