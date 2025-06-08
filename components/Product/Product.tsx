"use client";

import { DeviceImage } from "../common/DeviceImage/DeviceImage";
import { ProductProps } from "./Product.types";
import { Text } from '../common/Text';
import styles from "./Product.module.scss";

const imageSize = 292;

export function Product({ device }: ProductProps) {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <DeviceImage width={imageSize} height={imageSize} device={device} />
      </div>
      <div className={styles.info}>
        <h1 className={styles.heading}>{device.name}</h1>
        <Text color="secondary">{device.line.name}</Text>

        <div className={styles.attributes}>
          {device.attributes.map((attribute) => (
            <div key={attribute.label} className={styles.attribute}>
              <Text>{attribute.label}</Text>
              <Text color="secondary">{attribute.value}</Text>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
