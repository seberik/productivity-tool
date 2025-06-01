import { searchDevices } from "@/lib/datasource";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get('name') || undefined;
  const filters = searchParams.get('filters')?.split(',') || undefined;

  const devices = await searchDevices({name, filters});
  return Response.json(devices);
}
