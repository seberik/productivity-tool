import Link from "next/link";
import styles from "./SiteHeader.module.scss";
import Logo from "./logo.svg";
import { Text } from "../common/Text";

export function SiteHeader() {
  return (
    <header className={styles.container}>
      <div className={styles.brand}>
        <Link href="/" className={styles.logo}>
          <Logo className={styles.logoImage} />
        </Link>
        <Text color="secondary">Devices</Text>
      </div>
      <div className={styles.author}>
        <Text color="secondary">Sebastian Eriksson</Text>
      </div>
    </header>
  );
}
