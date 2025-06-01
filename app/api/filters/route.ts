import { getAllFilters } from "@/lib/datasource";

export async function GET() {
  const filters = await getAllFilters();

  return Response.json(filters);
}
