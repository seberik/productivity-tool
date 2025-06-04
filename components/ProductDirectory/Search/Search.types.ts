import { DisplayOption } from "../ProductDirectory.types";

export type FormState = {
  searchQuery: string;
  filters: string[];
  displayOption: DisplayOption;
};

export type SearchProps = {
  hits?: number;
  defaultValues?: Partial<FormState>;
}