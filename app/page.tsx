import ProductDirectory from "@/components/ProductDirectory";
import { searchDevices } from "@/lib/datasource";

type ProductDirectoryProps = {
  searchParams: Promise<{
    searchQuery: string;
    filters: string[];
    displayOption: string;
  }>;
};

export default async function ProductDirectoryPage({
  searchParams,
}: ProductDirectoryProps) {
  const { filters, searchQuery } = await searchParams;

  const devices = await searchDevices({
    filters,
    name: searchQuery,
  });

  return (
    <main>
      <ProductDirectory initialDevices={devices} />
    </main>
  );
}
