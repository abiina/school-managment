import { SortOrder } from "../../util/SortOrder";

export type ClassModelOrderByInput = {
  className?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
