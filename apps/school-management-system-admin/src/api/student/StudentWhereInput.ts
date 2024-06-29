import { ClassModelWhereUniqueInput } from "../classModel/ClassModelWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type StudentWhereInput = {
  classField?: ClassModelWhereUniqueInput;
  dateOfBirth?: DateTimeNullableFilter;
  email?: StringNullableFilter;
  enrolmentYear?: IntNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  phone?: StringNullableFilter;
};
