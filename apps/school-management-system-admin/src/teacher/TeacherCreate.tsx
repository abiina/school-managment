import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const TeacherCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Name" source="name" />
        <TextInput label="phone" source="phone" />
        <TextInput label="Subjects" source="subjects" />
      </SimpleForm>
    </Create>
  );
};
