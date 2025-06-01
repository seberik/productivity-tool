import { useEffect, useState } from "react";
import { Device, Filter } from "./datasource.types";

function useAPI<T>(path: string, parameters: string) {
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

export function useDevices(name?: string, filters?: string[]) {
  const searchParams = new URLSearchParams();

  if (name) {
    searchParams.append("name", name);
  }

  if (filters && filters.length > 0) {
    searchParams.append("filters", filters.join(","));
  }

  const {
    result: devices,
    loading,
    error,
  } = useAPI<Device>("devices", searchParams.toString());

  return { devices, loading, error };
}

export function useFilters() {
  const searchParams = new URLSearchParams();

  const { result: filters, loading, error } = useAPI<Filter>(
    "filters",
    searchParams.toString()
  );

  return { filters, loading, error };
}
