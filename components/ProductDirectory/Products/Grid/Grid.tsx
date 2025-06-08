import { Device } from "@/lib/datasource.types";
import styles from './Grid.module.scss';
import Link from "next/link";
import { DeviceImage } from "@/components/common/DeviceImage/DeviceImage";

export function Grid({ devices }: { devices: Device[]}) {
  return <div className={styles.container}>
    {devices.map((device) => (
        <Link
          className={styles.card}
          href={`/device/${device.id}`}
          key={device.id}
        >
          <div className={styles.image}>
            <div className={styles.imageOverlay}>
              <div className={styles.label}>{device.line.name}</div>
            </div>
            <DeviceImage height={100} width={100} device={device}></DeviceImage>
          </div>
          <div className={styles.description}>
            <div className={styles.title}>{device.name}</div>
            <div className={styles.shortnames}>{device.shortnames[0]}</div>
          </div>
        </Link>
      ))}
  </div>
}