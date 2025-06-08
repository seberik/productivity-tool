import Link from "next/link";
import classNames from "classnames";
import { Device } from "@/lib/datasource.types";
import styles from "./List.module.scss";
import { DeviceImage } from "@/components/common/DeviceImage/DeviceImage";
import { Text } from "../../../common/Text";

export function List({ devices }: { devices: Device[] }) {
  return (
    <div>
      <div className={classNames(styles.tableRow, styles.tableHeading)}>
        <div className={styles.image} />
        <span>Product Line</span>
        <span>Name</span>
      </div>
      {devices.map((device) => (
        <Link
          className={styles.tableRow}
          href={`/device/${device.id}`}
          key={device.id}
        >
          <div className={styles.image}>
            <DeviceImage device={device} width={32} height={32} />
          </div>
          <span>{device.line.name}</span>
          <span>
            <Text color="secondary">{device.name}</Text>
          </span>
        </Link>
      ))}
    </div>
  );
}
