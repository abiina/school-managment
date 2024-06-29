import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const SubjectEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="SubjectName" source="subjectName" />
      </SimpleForm>
    </Edit>
  );
};
