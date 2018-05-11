import React, { PureComponent } from "react";
import { injectGlobal } from "styled-components";
import ReTable from "../src/index";

import Switch from "./components/switch";
import NumberSelector from "./components/number_selector";
import ThemeSelector from "./components/theme_selector";
import {
  FormGroup,
  FormControlLabel,
  FormControl,
  FormLabel
} from "material-ui/Form";

import defaultTheme from "../src/themes/default";
import dark from "../src/themes/dark";

import columns from "./columns";
import rows from "./rows";
import totals from "./totals";
import IconRenderer from "./components/channel_renderer";

const themes = [
  {
    value: defaultTheme,
    label: "Default"
  },
  {
    value: dark,
    label: "Dark"
  }
];


injectGlobal`
  body {
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
  }
`;

class Table extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      withSelection: true,
      withTree: true,
      rowHeight: 3,
      theme: "Default",
      columns: columns,
      isLoading: false,
      sort: [{ id: "S6", direction: "asc" }]
    };
  }

  toggleWithSelection = () => {
    const { withSelection } = this.state;
    this.setState({ withSelection: !withSelection });
  };

  toggleIsLoading = () => {
    const { isLoading } = this.state;
    this.setState({ isLoading: !isLoading });
  };

  decreaseRowHeight = () => {
    const { rowHeight } = this.state;
    this.setState({ rowHeight: rowHeight - 1 });
  };

  increaseRowHeight = () => {
    const { rowHeight } = this.state;
    this.setState({ rowHeight: rowHeight + 1 });
  };

  toggleWithTree = () => {
    const { withTree } = this.state;
    this.setState({ withTree: !withTree });
  };

  setTheme = event => {
    this.setState({ theme: event.target.value });
  };

  onColumnChange = columns => {
    this.setState({ columns });
  };

  onSortChange = sort => {
    this.setState({ sort });
  };

  render() {
    const {
      withSelection,
      withTree,
      rowHeight,
      theme,
      columns,
      isLoading,
      sort
    } = this.state;
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
          <FormControl style={{ width: "200px" }}>
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
              <Switch
                onChange={this.toggleIsLoading}
                checked={isLoading}
                label="isLoading"
              />
            </FormGroup>
          </FormControl>
          <FormControl style={{ width: "250px", marginRight: "40px" }}>
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
          <FormControl style={{ width: "250px" }}>
            <FormLabel>Theme</FormLabel>
            <FormGroup>
              <ThemeSelector
                value={theme}
                options={themes}
                onChange={this.setTheme}
              />
            </FormGroup>
          </FormControl>
        </div>
        <ReTable
          columns={columns}
          rows={rows}
          sort={sort}
          totals={totals}
          withSelection={withSelection}
          withTree={withTree}
          rowHeight={60 + (rowHeight - 3) * 6}
          theme={
            themes.find(currentTheme => theme === currentTheme.label).value
          }
          onColumnChange={this.onColumnChange}
          onSortChange={this.onSortChange}
          isLoading={isLoading}
          renderers={{ ICON: IconRenderer }}
        />
      </div>
    );
  }
}

export default Table;
