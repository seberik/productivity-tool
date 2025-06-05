import Image from "next/image";
import { Device } from "@/lib/datasource.types";

interface DeviceImageProps {
  width: number;
  height: number;
  device: Pick<Device, "id" | "name" | "images">;
}

export function DeviceImage({
  width,
  height,
  device,
}: DeviceImageProps) {
  return (
    <Image
      width={width}
      height={height}
      src={`https://images.svc.ui.com/?u=https%3A%2F%2Fstatic.ui.com%2Ffingerprint%2Fui%2Fimage
  s%2F${device.id}%2Fdefault%2F${device.images.default}.png&w=${width}&q=${height}`}
      alt={device.name}
      loading="lazy"
    ></Image>
  );
}
