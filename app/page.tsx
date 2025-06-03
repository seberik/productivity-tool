import ProductDirectory from "@/components/ProductDirectory";
import { getAllDevices } from "@/lib/datasource";

export default async function Home() {
  const { devices } = await getAllDevices();

  return (
    <main>
      <ProductDirectory initialDevices={devices} />
    </main>
  );
}
