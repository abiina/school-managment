import { SortOrder } from "../../util/SortOrder";

export type StudentOrderByInput = {
  classFieldId?: SortOrder;
  createdAt?: SortOrder;
  dateOfBirth?: SortOrder;
  email?: SortOrder;
  enrolmentYear?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  phone?: SortOrder;
  updatedAt?: SortOrder;
};
