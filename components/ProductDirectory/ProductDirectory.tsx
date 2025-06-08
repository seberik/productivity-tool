"use client";

import { Device } from "@/lib/datasource.types";
import { useDevices } from "@/lib/useApiClient";
import { Search } from "./Search";
import { Products } from "./Products";
import { useSearchParams } from "next/navigation";
import { DisplayOption } from "./ProductDirectory.types";
import styles from "./ProductDirectory.module.scss";

export default function ProductDirectory({
  initialDevices,
}: {
  initialDevices: Device[];
}) {
  const searchParams = useSearchParams();

  const filters = searchParams.getAll("filter");
  const searchQuery = searchParams.get("searchQuery") ?? undefined;

  const { devices } = useDevices({
    initialDevices,
    filters,
    name: searchQuery,
  });

  const displayOption =
    (searchParams.get("displayOption") as DisplayOption) ?? DisplayOption.GRID;

  return (
    <div className={styles.container}>
      <Search
        hits={devices?.length ?? 0}
        defaultValues={{ filters, searchQuery, displayOption }}
      />
      {devices && <Products displayOption={displayOption} devices={devices} />}
    </div>
  );
}
