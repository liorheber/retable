import React, { PureComponent } from "react";
import ReTable from "../src/index";

import Switch from "./components/switch";
import NumberSelector from "./components/number_selector";
import {
  FormGroup,
  FormControlLabel,
  FormControl,
  FormLabel
} from "material-ui/Form";

import columns from "./columns";
import rows from "./rows";
import totals from "./totals";

class Table extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      withSelection: true,
      withTree: true,
      rowHeight: 3
    };
  }

  toggleWithSelection = () => {
    const { withSelection } = this.state;
    this.setState({ withSelection: !withSelection });
  };

  decreaseRowHeight = () => {
    const { rowHeight } = this.state;
    this.setState({ rowHeight: rowHeight - 1 });
  };

  increaseRowHeight = () => {
    const { rowHeight } = this.state;
    console.log("increase");
    this.setState({ rowHeight: rowHeight + 1 });
  };

  toggleWithTree = () => {
    const { withTree } = this.state;
    this.setState({ withTree: !withTree });
  };

  render() {
    const { withSelection, withTree, rowHeight } = this.state;
    return (
      <div>
        <div
          style={{
            height: "260px",
            background: "#f3f3f3",
            padding: "14px",
            boxShadow: "0px -14px 30px -25px #000000a3 inset"
          }}
        >
          <FormControl style={{width: "250px"}}>
            <FormLabel>Boolean Props</FormLabel>
            <FormGroup>
              <Switch
                onChange={this.toggleWithSelection}
                checked={withSelection}
                label="withSelection"
              />
              <Switch
                onChange={this.toggleWithTree}
                checked={withTree}
                label="withTree"
              />
            </FormGroup>
          </FormControl>
          <FormControl style={{width: "250px"}}>
            <FormLabel>Number Props</FormLabel>
            <FormGroup>
              <NumberSelector
                decrease={this.decreaseRowHeight}
                increase={this.increaseRowHeight}
                label="rowHeight"
                size={rowHeight}
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
          rowHeight={60 + (rowHeight - 3) * 6}
        />
      </div>
    );
  }
}

export default Table;
