import React from "react";
import { randomString } from "@tundra/shared";
import styles from "./button.module.css";
// const styles = { button: "button" };

export const Button = () => {
  return <div className={styles.button}>{randomString()}</div>;
};
