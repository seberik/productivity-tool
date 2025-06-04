import styles from "./Products.module.scss";
import classNames from "classnames";
import Link from "next/link";
import { ProductsProps } from "./Products.types";
import { DisplayOption } from "../ProductDirectory.types";

export function Products({
  devices,
  displayOption,
}: ProductsProps) {
  return (
    <div
      className={classNames({
        [styles.grid]: displayOption === DisplayOption.GRID,
        [styles.list]: displayOption === DisplayOption.LIST,
      })}
    >
      {devices.map((device) => (
        <div key={device.id}>
          <Link shallow href={`/device/${device.id}`}>{device.product.name}</Link></div>
      ))}
    </div>
  );
}
