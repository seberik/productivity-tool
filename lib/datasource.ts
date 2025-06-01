import { promises as fs } from "fs";
import path from "path";
import { DeviceList, Device, Filter } from "./datasource.types";

export async function getAllDevices(): Promise<DeviceList> {
  const filePath = path.join(process.cwd(), "data", "public.json");
  const fileContents = await fs.readFile(filePath, "utf-8");

  return JSON.parse(fileContents);
}

export async function getDeviceById(id: string) {
  const data = await getAllDevices();
  return data.devices.find((device: Device) => device.id === id);
}

export async function getAllFilters(): Promise<Array<Filter>> {
  const { devices } = await getAllDevices();

  const uniqueProductLines: Record<string, Device['line']> = {};

  devices.forEach((device) => {
    if (!uniqueProductLines[device.line.id]) {
      uniqueProductLines[device.line.id] = device.line;
    }
  });

  return Object.values(uniqueProductLines);
}

export async function searchDevices({
  name,
  filters,
}: {
  name?: string;
  filters?: string[];
}) {
  const { devices } = await getAllDevices();

  const nameFilter = (device: Device) =>
    !name || device.product.name.toLowerCase().includes(name.toLowerCase());

  const productLineFilter = (device: Device) =>
    !filters || filters.includes(device.line.id);

  const filteredDevices = devices.filter(
    (device) => nameFilter(device) && productLineFilter(device)
  );

  return filteredDevices;
}
