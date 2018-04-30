import React from "react";
import { action, storiesOf } from "@storybook/react";
import ReTable from "../src/index";

import columns from "./columns";
import rows from "./rows";
import totals from "./totals";

storiesOf("React Multi Select", module).add("Default view", () => {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "260px",
          background: "#6d6d6d"
        }}
      >
      </div>
      <ReTable columns={columns} rows={rows} totals={totals}/>
    </div>
  );
});
