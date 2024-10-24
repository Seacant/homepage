"use client";
import React from "react";
import styles from "./Button.module.css";

type ButtonProps = React.ComponentProps<"button">;
export const Button: React.FC<ButtonProps> = (props) => (
  <button {...props} className={[styles.button, props.className].join(" ")}>
    {props.children}
  </button>
);
