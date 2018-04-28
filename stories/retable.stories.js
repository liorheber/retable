import React from "react";
import { action, storiesOf } from "@storybook/react";
import ReTable from "../src/index";

import columns from "./columns";
import rows from "./rows";

storiesOf("React Multi Select", module)
  .add("Default view", () => {
    return (
      <div>
        <div style={{width: "100%", height: "200px", background: "gray"}}> Placeholder </div>
      <ReTable columns={columns} rows={rows}/>
      </div>
    );
  });