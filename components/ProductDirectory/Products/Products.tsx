import styles from './Products.module.scss';
import { ProductsProps } from "./Products.types";
import { DisplayOption } from "../ProductDirectory.types";
import { List } from "./List";
import { Grid } from "./Grid";

export function Products({ devices, displayOption }: ProductsProps) {
  return <div className={styles.container}>{displayOption === DisplayOption.LIST ? (
    <List devices={devices} />
  ) : (
    <Grid devices={devices} />
  )}</div>;
}
