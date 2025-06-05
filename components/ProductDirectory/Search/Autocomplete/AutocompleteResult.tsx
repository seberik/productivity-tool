import { Device } from "@/lib/datasource.types";
import Link from "next/link";

function splitByMatch(fullText: string, searchString: string) {
  const index = fullText.toLowerCase().indexOf(searchString.toLowerCase());

  return [
    fullText.slice(0, index),
    fullText.slice(index, index + searchString.length),
    fullText.slice(index + searchString.length),
  ];
}

export function AutocompleteResult({
  device,
  searchString,
}: {
  device: Device;
  searchString: string;
}) {
  const [start, match, end] = splitByMatch(device.name, searchString);

  return (
    <div>
      <Link href={`/device/${device.id}`}>
        {start}
        <b>{match}</b>
        {end}
      </Link>
    </div>
  );
}
