"use client";
import React from "react";
import { Button } from "../../components/Button";
import styles from "./PrintButton.module.css";

export const PrintButton: React.FC = () => (
  <Button className={styles["pdf-button"]} onClick={() => window.print()}>
    Psst! Need a PDF?
  </Button>
);
