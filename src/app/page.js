"use client";
import styles from "./css/page.module.css";
import Clock from "./clock";
import { Provider } from "react-redux";
import { store } from "../redux/store";

export default function Page() {
  return (
    <Provider store={store}>
      <main className={styles.main}>
        <Clock />
      </main>
    </Provider>
  );
}
