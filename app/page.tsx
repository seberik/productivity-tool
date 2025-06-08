import ProductDirectory from "@/components/ProductDirectory";
import { searchDevices } from "@/lib/datasource";

type ProductDirectoryProps = {
  searchParams: Promise<{
    searchQuery: string;
    filter: string[];
    displayOption: string;
  }>;
};

export default async function ProductDirectoryPage({
  searchParams,
}: ProductDirectoryProps) {
  const { filter, searchQuery } = await searchParams;

  const devices = await searchDevices({
    filters: filter,
    name: searchQuery,
  });

  return (
    <main>
      <ProductDirectory initialDevices={devices} />
    </main>
  );
}
