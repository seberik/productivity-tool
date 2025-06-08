import { getDeviceById } from "@/lib/datasource";
import { DevicePageProps } from "./page.type";
import { Product } from "@/components/Product/Product";

export default async function DevicePage({ params }: DevicePageProps) {
  const { id } = await params;
  const device = await getDeviceById(id);

  if (!device) return null;

  return (
    <Product device={device} />
  );
}
