import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const SubjectCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="SubjectName" source="subjectName" />
      </SimpleForm>
    </Create>
  );
};
