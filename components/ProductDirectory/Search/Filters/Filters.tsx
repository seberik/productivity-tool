import { useFilters } from "@/lib/useApiClient";
import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Filters.module.scss";
import { FilterProps } from "./Filters.types";
import { Text } from "../../../common/Text";

export function Filters({ onChange }: FilterProps) {
  const [showFilters, setShowFilters] = useState(false);
  const { filters } = useFilters();
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const componentRef = useRef<HTMLDivElement>(null);

  const handleClick = (id: string) => {
    const update = {
      ...checked,
      [id]: !checked[id],
    };

    setChecked(update);

    onChange(Object.keys(update).filter((filterId) => update[filterId]));
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (
        componentRef.current &&
        !componentRef.current.contains(event.target as Node)
      ) {
        setShowFilters(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [componentRef]);

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
