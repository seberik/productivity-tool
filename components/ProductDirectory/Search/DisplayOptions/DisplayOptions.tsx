import styles from "./DisplayOptions.module.scss";
import { DisplayOption } from "../../ProductDirectory.types";
import { DisplayOptionsProps } from "./DisplayOptions.types";

export function DisplayOptions({ onChange }: DisplayOptionsProps) {
  return (
    <div className={styles.container}>
      <button onClick={() => onChange(DisplayOption.GRID)}>Grid</button>
      <button onClick={() => onChange(DisplayOption.LIST)}>List</button>
    </div>
  );
}
