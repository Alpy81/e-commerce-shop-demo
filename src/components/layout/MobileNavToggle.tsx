"use client";

import styles from "./MobileNavToggle.module.css";

interface MobileNavToggleProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function MobileNavToggle({
  isOpen,
  onToggle,
}: MobileNavToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={styles.toggle}
      aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
      aria-expanded={isOpen}
    >
      <span className={`${styles.bar} ${isOpen ? styles.barTop : ""}`} />
      <span className={`${styles.bar} ${isOpen ? styles.barMiddle : ""}`} />
      <span className={`${styles.bar} ${isOpen ? styles.barBottom : ""}`} />
    </button>
  );
}
