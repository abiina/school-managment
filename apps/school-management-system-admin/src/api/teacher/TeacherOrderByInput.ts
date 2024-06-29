import { SortOrder } from "../../util/SortOrder";

export type TeacherOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  phone?: SortOrder;
  subjects?: SortOrder;
  updatedAt?: SortOrder;
};
