import styles from "./TrustBar.module.css";

const trustItems = [
  {
    title: "Kostenloser Versand",
    text: "Ab 500 € Bestellwert",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M3 7h11v10H3z" />
        <path d="M14 10h4l3 3v4h-7z" />
        <circle cx="7.5" cy="19" r="1.5" />
        <circle cx="17.5" cy="19" r="1.5" />
      </svg>
    ),
  },
  {
    title: "30 Tage Rückgaberecht",
    text: "Unkompliziert & kostenfrei",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M3 12a9 9 0 1 1 3 6.7" />
        <path d="M3 21v-5h5" />
      </svg>
    ),
  },
  {
    title: "Sichere Zahlung",
    text: "SSL-verschlüsselt",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="4" y="10" width="16" height="10" rx="1.5" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      </svg>
    ),
  },
  {
    title: "Montageservice",
    text: "Optional buchbar",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M14.7 6.3a3 3 0 0 0-4.24 4.24L4 17v3h3l6.46-6.46a3 3 0 0 0 4.24-4.24l-2.1 2.1-2-2z" />
      </svg>
    ),
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
