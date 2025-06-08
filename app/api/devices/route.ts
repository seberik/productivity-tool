import { searchDevices } from "@/lib/datasource";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get("name") || null;
  const filters = searchParams.getAll("filters");

  console.log(name, filters);

  const devices = await searchDevices({
    name,
    filters: filters?.length > 0 ? filters : null,
  });
  return Response.json(devices);
}
