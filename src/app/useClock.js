import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCurrentTime } from "../redux/timeSlice";

export default function useClock() {
  const { time } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const id = setInterval(() => {
      dispatch(getCurrentTime(new Date().toString()));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return time;
}
