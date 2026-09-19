import styles from "./BrandStatement.module.css";

const pillars = [
  {
    title: "Handwerkliche Qualität",
    text: "Ausgewählte Materialien, sorgfältig verarbeitet – für Möbelstücke, die Generationen überdauern.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M12 2 3 7v10l9 5 9-5V7z" />
        <path d="M3 7l9 5 9-5" />
        <path d="M12 12v10" />
      </svg>
    ),
  },
  {
    title: "Zeitloses Design",
    text: "Klare Formen statt kurzlebiger Trends – für ein Zuhause, das nie aus der Mode kommt.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v18M3 12h18" />
      </svg>
    ),
  },
  {
    title: "Persönlicher Service",
    text: "Von der Beratung bis zur Lieferung – wir begleiten dich bei jeder Entscheidung.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M12 21s-7-4.5-9.5-9C1 8.5 2.5 5 6 5c2 0 3.5 1 4 2 0.5-1 2-2 4-2 3.5 0 5 3.5 3.5 7-2.5 4.5-9.5 9-9.5 9z" />
      </svg>
    ),
  },
];

export default function BrandStatement() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Unsere Philosophie</p>
        <h2 className={styles.headline}>Möbel, die bleiben</h2>
        <p className={styles.intro}>
          Raumwerk steht für Möbel, die nicht dem nächsten Trend folgen, sondern
          deinem Zuhause über Jahre hinweg Charakter verleihen. Jedes Stück wird
          mit Sorgfalt ausgewählt – für einen Wohnstil, der zeitlos bleibt.
        </p>

        <div className={styles.pillars}>
          {pillars.map((pillar) => (
            <div key={pillar.title} className={styles.pillar}>
              <span className={styles.icon}>{pillar.icon}</span>
              <h3 className={styles.pillarTitle}>{pillar.title}</h3>
              <p className={styles.pillarText}>{pillar.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
