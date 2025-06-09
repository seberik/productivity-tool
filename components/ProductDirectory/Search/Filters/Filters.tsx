import { useFilters } from "@/lib/useApiClient";
import classNames from "classnames";
import React, { useRef, useState } from "react";
import styles from "./Filters.module.scss";
import { FilterProps } from "./Filters.types";
import { Text } from "../../../common/Text";
import { useClickOutside } from "@/lib/useClickOutside";

export function Filters({ onChange, initialSelected }: FilterProps) {
  const [showFilters, setShowFilters] = useState(false);
  const { filters } = useFilters();
  const [checked, setChecked] = useState<Record<string, boolean>>(
    initialSelected.reduce<Record<string, true>>((acc, key) => {
      acc[key] = true;
      return acc;
    }, {})
  );
  const componentRef = useRef<HTMLDivElement>(null);

  const handleClick = (id: string) => {
    const update = {
      ...checked,
      [id]: !checked[id],
    };

    setChecked(update);

    onChange(Object.keys(update).filter((filterId) => update[filterId]));
  };

  useClickOutside(componentRef, () => setShowFilters(false));

  const handleFilterToggleClick = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div ref={componentRef} className={styles.container}>
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
        <Text weight="medium">Product&nbsp;Line</Text>
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
