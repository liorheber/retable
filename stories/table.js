import React, { PureComponent } from "react";
import ReTable from "../src/index";

import Switch from "material-ui/Switch";
import {
  FormGroup,
  FormControlLabel,
  FormControl,
  FormLabel
} from "material-ui/Form";

import columns from "./columns";
import rows from "./rows";
import totals from "./totals";

const SwitchComponent = ({ onChange, checked, label }) => (
  <FormControlLabel
    control={<Switch checked={checked} onChange={onChange} color="primary"/>}
    label={label}
  />
);

class Table extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      withSelection: true,
      withTree: true
    };
  }

  toggleWithSelection = () => {
    const { withSelection } = this.state;
    this.setState({ withSelection: !withSelection });
  };

  toggleWithTree = () => {
    const { withTree } = this.state;
    this.setState({ withTree: !withTree });
  };

  render() {
    const { withSelection, withTree } = this.state;
    return (
      <div>
        <div
          style={{
            width: "100%",
            height: "260px",
            background: "#e4e4e4",
            padding: "14px",
          }}
        >
          <FormControl>
            <FormLabel>Boolean Props</FormLabel>
            <FormGroup>
              <SwitchComponent
                onChange={this.toggleWithSelection}
                checked={withSelection}
                label="withSelection"
              />
              <SwitchComponent
                onChange={this.toggleWithTree}
                checked={withTree}
                label="withTree"
              />
            </FormGroup>
          </FormControl>
        </div>
        <ReTable
          columns={columns}
          rows={rows}
          totals={totals}
          withSelection={withSelection}
          withTree={withTree}
        />
      </div>
    );
  }
}

export default Table;
