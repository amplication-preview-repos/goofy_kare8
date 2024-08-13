import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="brand" source="brand" />
        <TextInput label="category" source="category" />
        <TextInput label="colors" source="colors" />
        <NumberInput label="discountedprice" source="discountedprice" />
        <TextInput label="name" source="name" />
        <NumberInput label="originalprice" source="originalprice" />
        <TextInput label="sizes" source="sizes" />
        <TextInput label="stock" source="stock" />
      </SimpleForm>
    </Edit>
  );
};