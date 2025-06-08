"use client";

import { useEffect, useState } from "react";
import { Device, Filter } from "./datasource.types";

function useAPI<T>({ path, parameters }: { path: string; parameters: string }) {
  const [result, setResult] = useState<T[]>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch(`/api/${path}?${parameters}`)
      .then(async (response) => {
        const json = await response.json();
        setResult(json);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [path, parameters]);

  return {
    result,
    loading,
    error,
  };
}

export function useDevices({
  initialDevices,
  name,
  filters,
}: {
  initialDevices?: Device[];
  name?: string | null;
  filters?: string[] | string | null;
}) {
  const searchParams = new URLSearchParams();

  if (name) {
    searchParams.append("name", name);
  }

  if (filters && Array.isArray(filters)) {
    filters.forEach((filter) => searchParams.append("filters", filter));
  }
  
  if (typeof filters === 'string') {
    searchParams.append("filters", filters);
  }

  const {
    result: devices,
    loading,
    error,
  } = useAPI<Device>({
    path: "devices",
    parameters: searchParams.toString(),
  });

  return {
    devices: devices && devices?.length > 0 ? devices : initialDevices,
    loading,
    error,
  };
}

export function useFilters() {
  const searchParams = new URLSearchParams();

  const {
    result: filters,
    loading,
    error,
  } = useAPI<Filter>({ path: "filters", parameters: searchParams.toString() });

  return { filters, loading, error };
}
