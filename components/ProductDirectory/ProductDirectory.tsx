"use client";

import { Device } from "@/lib/datasource.types";
import { useDevices } from "@/lib/useApiClient";
import { Search } from "./Search";
import { Products } from "./Products";
import { useSearchParams } from "next/navigation";
import { DisplayOption } from "./ProductDirectory.types";

export default function ProductDirectory({
  initialDevices,
}: {
  initialDevices: Device[];
}) {
  const searchParams = useSearchParams();

  const { devices } = useDevices({
    initialDevices,
    filters: searchParams.get("filters") as string,
    name: searchParams.get("searchQuery") as string,
  });

  const displayOption = searchParams.get("displayOption") as DisplayOption ?? DisplayOption.GRID;

  return (
    <>
      <Search hits={devices?.length ?? 0} />
      {devices && <Products displayOption={displayOption} devices={devices} />}
    </>
  );
}
