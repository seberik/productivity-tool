import { useCallback, useEffect } from "react";

export function useClickOutside(
  componentRef: React.RefObject<HTMLDivElement | null>,
  onClickOutside: () => void
) {
  const handleClickOutside = useCallback((event: MouseEvent | TouchEvent) => {
    console.log(event)
    if (
      componentRef.current &&
      !componentRef.current.contains(event.target as Node)
    ) {
      onClickOutside();
    }
  }, [componentRef, onClickOutside]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [componentRef, handleClickOutside]);
}
