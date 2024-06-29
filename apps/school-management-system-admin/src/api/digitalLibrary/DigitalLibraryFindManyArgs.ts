import { DigitalLibraryWhereInput } from "./DigitalLibraryWhereInput";
import { DigitalLibraryOrderByInput } from "./DigitalLibraryOrderByInput";

export type DigitalLibraryFindManyArgs = {
  where?: DigitalLibraryWhereInput;
  orderBy?: Array<DigitalLibraryOrderByInput>;
  skip?: number;
  take?: number;
};
