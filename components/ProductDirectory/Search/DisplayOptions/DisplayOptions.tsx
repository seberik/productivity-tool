import styles from "./DisplayOptions.module.scss";
import { DisplayOption } from "../../ProductDirectory.types";
import { DisplayOptionsProps } from "./DisplayOptions.types";
import GridIcon from './grid.svg';
import ListIcon from './list.svg';

export function DisplayOptions({ onChange }: DisplayOptionsProps) {
  return (
    <div className={styles.container}>
      <button className={styles.iconButton} onClick={() => onChange(DisplayOption.GRID)}><GridIcon /></button>
      <button className={styles.iconButton} onClick={() => onChange(DisplayOption.LIST)}><ListIcon /></button>
    </div>
  );
}
