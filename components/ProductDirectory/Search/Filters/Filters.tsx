import { useFilters } from "@/lib/useApiClient";
import classNames from "classnames";
import React, { useState } from "react";
import styles from "./Filters.module.scss";
import { FilterProps } from "./Filters.types";

export function Filters({ onChange }: FilterProps) {
  const [showFilters, setShowFilters] = useState(false);
  const { filters } = useFilters();
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const handleClick = (id: string) => {
    const update = {
      ...checked,
      [id]: !checked[id],
    };

    setChecked(update);

    onChange(Object.keys(update).filter((filterId) => update[filterId]));
  };

  const handleFilterToggleClick = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className={styles.container}>
      <button
        type="button"
        className={styles.filterToggle}
        onClick={handleFilterToggleClick}
      >
        Filter
      </button>

      <div
        className={classNames(styles.filters, {
          [styles.visible]: showFilters,
        })}
      >
        {filters?.map((filter) => (
          <div className={styles.filter} key={filter.id}>
            <input
              className={styles.checkbox}
              type="checkbox"
              checked={!!checked[filter.id]}
              onChange={() => handleClick(filter.id)}
              value={filter.id}
              id={filter.id}
            />
            <label className={styles.label} htmlFor={filter.id}>
              {filter.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
