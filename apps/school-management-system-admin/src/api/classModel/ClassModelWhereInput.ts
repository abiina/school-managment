import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StudentListRelationFilter } from "../student/StudentListRelationFilter";

export type ClassModelWhereInput = {
  className?: StringNullableFilter;
  id?: StringFilter;
  students?: StudentListRelationFilter;
};
