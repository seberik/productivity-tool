"use client";

import Link from "next/link";
import { Device } from "@/lib/datasource.types";
import { useDevices } from "@/lib/useApiClient";

export default function ProductDirectory({ initialDevices }: { initialDevices: Device[]}) {
  const { devices } = useDevices({ initialDevices });

  return (
    <>
      {devices?.length} devices:
      <table>
        <thead>
          <tr>
            <th>Product line</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {devices?.map((device) => (
            <tr key={device.id}>
              <td>
                <Link href={`/device/${device.id}`}>{device.product.name}</Link>
              </td>
              <td>{device.line.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
