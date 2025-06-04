import { getDeviceById } from "@/lib/datasource";
import { DeviceImage } from "@/components/common/DeviceImage/DeviceImage";
import { DevicePageProps } from "./page.type";

const imageSize = 292;

export default async function DevicePage({ params }: DevicePageProps) {
  const { id } = await params;
  const device = await getDeviceById(id);

  if (!device) return null;

  return (
    <div>
      <h1>{device.product.name}</h1>

      <DeviceImage width={imageSize} height={imageSize} device={device} />
    </div>
  );
}
