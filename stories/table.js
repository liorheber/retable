import React, { PureComponent } from "react";
import ReTable from "../src/index";

import Button from "material-ui/Button";

import columns from "./columns";
import rows from "./rows";
import totals from "./totals";

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
            background: "#6d6d6d"
          }}
        >
          <div
            style={{
              background: "#e4e4e4"
            }}
          >
            <Button
              onClick={this.toggleWithSelection}
            >{`withSelection: ${withSelection}`}</Button>
            <Button
              onClick={this.toggleWithTree}
            >{`withTree: ${withTree}`}</Button>
          </div>
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
