import React from "react";
import {
  Box,
  Button,
  CheckBox,
  Form,
  FormField,
  RadioButtonGroup,
  Select
} from "grommet";
import SandboxComponent from "./SandboxComponent";

export default () => (
  <SandboxComponent pad="none">
    <Form onSubmit={({ value }) => console.log("Submit: ", value)}>
      <FormField name="name" label="Name" required={true} />
      <FormField
        label="Continent"
        name="select"
        component={Select}
        options={["North America", "South America", "Asia"]}
      />
      <FormField name="address" label="Address" />
      <FormField
        name="acknowledge"
        component={CheckBox}
        pad={true}
        label="acknowledge"
      />
      <FormField
        name="day"
        component={RadioButtonGroup}
        pad={true}
        options={["Tuesday", "Friday"]}
      />
      <Button type="submit" label="Submit" primary={true} />
    </Form>
  </SandboxComponent>
);
