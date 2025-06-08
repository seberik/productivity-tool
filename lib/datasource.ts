import { promises as fs } from "fs";
import path from "path";
import type { DeviceList, Device, Filter } from "./datasource.types";
import { Datasource } from "@/data/Datasource";

function transformToDevice(source: Datasource["devices"][number]): Device {
  return {
    id: source.id,
    line: source.line,
    name: source.product.name,
    images: source.images,
    shortnames: source.shortnames,
    attributes: [
      { label: "Product Line", value: source.line.name },
      { label: "ID", value: source.line.id },
      {
        label: "Max. Power",
        value: source.unifi?.network?.power?.capacity ?? "n/a",
      },
      {
        label: "Speed",
        value:
          source.unifi?.network?.ethernetMaxSpeedMegabitsPerSecond ?? "n/a",
      },
      {
        label: "Number of ports",
        value: source.unifi?.network?.numberOfPorts ?? "n/a",
      },
    ],
  };
}

export async function getAllDevices(): Promise<DeviceList> {
  const filePath = path.join(process.cwd(), "data", "public.json");
  const fileContents = await fs.readFile(filePath, "utf-8");

  const result = JSON.parse(fileContents) as Datasource;

  return { devices: result.devices.map(transformToDevice) };
}

export async function getDeviceById(id: string) {
  const data = await getAllDevices();
  return data.devices.find((device: Device) => device.id === id);
}

export async function getAllFilters(): Promise<Array<Filter>> {
  const { devices } = await getAllDevices();

  const uniqueProductLines: Record<string, Device["line"]> = {};

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
  name?: string | null;
  filters?: string[] | null;
}) {
  const { devices } = await getAllDevices();

  const nameFilter = (device: Device) =>
    !name || device.name.toLowerCase().includes(name.toLowerCase());

  const productLineFilter = (device: Device) =>
    !filters || filters.includes(device.line.id);

  const filteredDevices = devices.filter(
    (device) => nameFilter(device) && productLineFilter(device)
  );

  return filteredDevices;
}
