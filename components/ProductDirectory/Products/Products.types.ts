import { Device } from "@/lib/datasource.types";
import { DisplayOption } from "../ProductDirectory.types";

export type ProductsProps = {
  devices: Device[];
  displayOption: DisplayOption;
}