import { useDevices } from "@/lib/useApiClient";
import { ChangeEvent, useDeferredValue, useState } from "react";
import { AutocompleteResult } from "./AutocompleteResult";
import styles from "./Autocomplete.module.scss";
import { AutocompleteProps } from "./Autocomplete.types";

export function Autocomplete({ onSubmit }: AutocompleteProps) {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const deferredSearchString = useDeferredValue(searchQuery);
  const { devices } = useDevices({ name: deferredSearchString });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setShowSuggestions(true);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    switch (event.key) {
      case "Enter":
        onSubmit(searchQuery);
        setShowSuggestions(false);
        return;
      case "Down":
        return;
    }
  };

  return (
    <>
      <input
        className={styles.input}
        placeholder="Search"
        value={searchQuery}
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      {showSuggestions && searchQuery && (
        <div
          style={{
            background: "grey",
            position: "absolute",
            width: 300,
            height: 500,
            overflow: "scroll",
          }}
        >
          {devices?.map((device) => (
            <AutocompleteResult
              key={device.id}
              device={device}
              searchString={deferredSearchString}
            />
          ))}
        </div>
      )}
    </>
  );
}
