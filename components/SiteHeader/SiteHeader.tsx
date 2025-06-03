import styles from "./SiteHeader.module.scss";

export function SiteHeader() {
  return (
    <header className={styles.container}>
      <div className={styles.brand}>
        <div className={styles.logo}>Logo</div>
        <div className={styles.title}>Devices</div>
      </div>
      <div className={styles.author}>Sebastian Eriksson</div>
    </header>
  );
}
