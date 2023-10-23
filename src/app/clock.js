import styles from "./css/clock.module.css";
import ClockFace from "./clockFace";
import ClockHands from "./clockHands";
import Tooltip from "./tooltip";
import useClock from "./useClock";
import { useDispatch } from "react-redux";
import { updateCursorPosition } from "../redux/timeSlice";

export default function Clock() {
  const time = useClock();
  const dispatch = useDispatch();

  return (
    <div
      className={styles.circle}
      onMouseMove={(e) =>
        dispatch(updateCursorPosition({ x: e.pageX, y: e.pageY }))
      }
    >
      <ClockFace />
      <ClockHands time={new Date(time.timestamp)} />
      <Tooltip
        timestamp={time.timestamp}
        cursorX={time.cursorX}
        cursorY={time.cursorY}
      />
    </div>
  );
}
