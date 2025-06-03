import { getDeviceById } from "@/lib/datasource";

type DevicePageProps = {
  params: {
    id: string;
  };
};

export default async function DevicePage({ params }: DevicePageProps) {
  const { id } = await params;
  const device = await getDeviceById(id);
  
  return (
    <div>
      <main>Device {id}</main>
      {JSON.stringify(device, null, 2)}
    </div>
  );
}
