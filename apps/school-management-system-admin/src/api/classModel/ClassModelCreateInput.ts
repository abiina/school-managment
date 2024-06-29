import { StudentCreateNestedManyWithoutClassModelsInput } from "./StudentCreateNestedManyWithoutClassModelsInput";

export type ClassModelCreateInput = {
  className?: string | null;
  students?: StudentCreateNestedManyWithoutClassModelsInput;
};
