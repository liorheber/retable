import React from "react";
import { action, storiesOf } from "@storybook/react";
import Table from "./table";

storiesOf("React Multi Select", module).add("Default view", () => {
  return (
    <Table />
  );
});
