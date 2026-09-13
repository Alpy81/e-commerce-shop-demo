import styles from "./TrustBar.module.css";

const trustItems = [
  {
    icon: "🚚",
    title: "Kostenloser Versand",
    text: "Ab 500 € Bestellwert",
  },
  {
    icon: "↩️",
    title: "30 Tage Rückgaberecht",
    text: "Unkompliziert & kostenfrei",
  },
  {
    icon: "🔒",
    title: "Sichere Zahlung",
    text: "SSL-verschlüsselt",
  },
  {
    icon: "🛋️",
    title: "Montageservice",
    text: "Optional buchbar",
  },
];

export default function TrustBar() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {trustItems.map((item) => (
          <div key={item.title} className={styles.item}>
            <span className={styles.icon}>{item.icon}</span>
            <div>
              <p className={styles.title}>{item.title}</p>
              <p className={styles.text}>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
