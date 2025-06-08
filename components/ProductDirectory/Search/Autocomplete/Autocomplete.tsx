import { useDevices } from "@/lib/useApiClient";
import { ChangeEvent, useDeferredValue, useState } from "react";
import { AutocompleteResult } from "./AutocompleteResult";
import styles from "./Autocomplete.module.scss";
import { AutocompleteProps } from "./Autocomplete.types";

export function Autocomplete({ onSubmit, initialValue }: AutocompleteProps) {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchQuery, setSearchQuery] = useState(initialValue);

  const deferredSearchString = useDeferredValue(searchQuery);
  const { devices } = useDevices({ name: deferredSearchString });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setShowSuggestions(true);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    switch (event.key) {
      case "Esc":
        setShowSuggestions(false);
      case "Enter":
        onSubmit(searchQuery);
        setShowSuggestions(false);
        return;
      case "Down":
        return;
    }
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        placeholder="Search"
        value={searchQuery}
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      {showSuggestions && searchQuery && (
        <div className={styles.result}>
          {devices?.length === 0 && <span>No suggestions.</span>} 
          {devices?.map((device) => (
            <AutocompleteResult
              key={device.id}
              device={device}
              searchString={deferredSearchString}
            />
          ))}
        </div>
      )}
    </div>
  );
}
