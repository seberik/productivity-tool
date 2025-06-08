import { Filters } from "./Filters";
import { Autocomplete } from "./Autocomplete/Autocomplete";
import { DisplayOptions } from "./DisplayOptions";
import styles from "./Search.module.scss";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FormState, SearchProps } from "./Search.types";
import { DisplayOption } from "../ProductDirectory.types";

function searchParamsFromFormState(formState: FormState): string {
  const params = new URLSearchParams();

  if (formState.searchQuery) {
    params.append("searchQuery", formState.searchQuery);
  }

  if (formState.filters && formState.filters.length > 0) {
    formState.filters.forEach((filter) => params.append("filter", filter));
  }

  if (formState.displayOption) {
    params.append("displayOption", formState.displayOption);
  }

  return `?${params.toString()}`;
}

export function Search({ hits, defaultValues }: SearchProps) {
  const router = useRouter();

  const [formState, setFormState] = useState<FormState>({
    searchQuery: defaultValues?.searchQuery ?? "",
    filters: defaultValues?.filters ?? [],
    displayOption: defaultValues?.displayOption ?? DisplayOption.GRID,
  });

  const handleSearchQueryChange = (searchQuery: string) => {
    setFormState({ ...formState, searchQuery });
    router.push(searchParamsFromFormState({ ...formState, searchQuery }));
  };

  const handleFilterChange = (filters: string[]) => {
    setFormState({ ...formState, filters });
    router.push(searchParamsFromFormState({ ...formState, filters }));
  };

  const handleDisplayOptionsChange = (displayOption: DisplayOption) => {
    setFormState({ ...formState, displayOption });
    router.push(searchParamsFromFormState({ ...formState, displayOption }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.query}>
        <Autocomplete onSubmit={handleSearchQueryChange} initialValue={formState.searchQuery} />
        <span className={styles.count}>{hits} Devices</span>
      </div>
      <div className={styles.controls}>
        <DisplayOptions onChange={handleDisplayOptionsChange} />
        <Filters onChange={handleFilterChange} />
      </div>
    </div>
  );
}
