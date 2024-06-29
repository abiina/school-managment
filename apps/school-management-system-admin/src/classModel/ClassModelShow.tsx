import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CLASSMODEL_TITLE_FIELD } from "./ClassModelTitle";

export const ClassModelShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ClassName" source="className" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Student"
          target="classFieldId"
          label="Students"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Class"
              source="classmodel.id"
              reference="ClassModel"
            >
              <TextField source={CLASSMODEL_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="DateOfBirth" source="dateOfBirth" />
            <TextField label="Email" source="email" />
            <TextField label="enrolmentYear" source="enrolmentYear" />
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <TextField label="phone" source="phone" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
