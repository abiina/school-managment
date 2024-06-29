import { StudentUpdateManyWithoutClassModelsInput } from "./StudentUpdateManyWithoutClassModelsInput";

export type ClassModelUpdateInput = {
  className?: string | null;
  students?: StudentUpdateManyWithoutClassModelsInput;
};
