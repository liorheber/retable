import React, { PureComponent, Fragment } from "react";
import { ScrollSync, ScrollSyncPane } from "react-scroll-sync";
import styled, { injectGlobal } from "styled-components";
import StaticArea from "./static_area/static_area";
import DynamicArea from "./dynamic_area/dynamic_area";
import Header from "./header/header";
import Footer from "./footer/footer";

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  font-size: 14px;
  font-family: RobotoRg, "Helvetica Neue", sans-serif;
  color: #6e6e6e;
  font-smooth: always;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: auto;
  border: 1px solid #e9ebf0;

  .row-hover {
    background-color: #f9f8fe;
  }
  
  .row-selected {
    background-color: #f4f1fd;
  }
`;

injectGlobal`
  @font-face {
    font-family:  'RobotoRg';
    src:          url('https://cdn.kenshoo.com/resources/fonts/roboto/Roboto-Regular.ttf') format('truetype');
    font-weight:  normal;
    font-style:   normal;
}
`;

class ReTable extends PureComponent {
  constructor(props) {
    super(props);
    this.commitResize = this.commitResize.bind(this);
    this.onSelectRow = this.onSelectRow.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
    this.removeSelections = this.removeSelections.bind(this);

    const staticColumns = props.columns.filter(
      col => col.defaultInColumnSelection
    );
    const dynamicColumns = props.columns.filter(
      col => !col.defaultInColumnSelection
    );

    this.state = {
      columns: props.columns,
      staticColumns,
      dynamicColumns,
      selection: []
    };
  }

  commitResize(id, width) {
    const { dynamicColumns, staticColumns } = this.state;
    const newDynamicColumns = dynamicColumns.map(
      col => (col.id === id ? { ...col, width } : col)
    );
    const newStaticColumns = staticColumns.map(
      col => (col.id === id ? { ...col, width } : col)
    );
    this.setState({
      dynamicColumns: newDynamicColumns,
      staticColumns: newStaticColumns
    });
  }

  removeSelections(index, isSelected){
    const rows = document.getElementsByClassName(`row-selected`);
    while (rows.length) {
        rows[0].classList.remove("row-selected");
    }
    this.setState({selection: []}, () => this.handleSelection(index, isSelected));
  }

  handleSelection(index, isSelected, event) {
    event && event.stopPropagation();
    const { selection } = this.state;
    const rows = document.getElementsByClassName(`row-${index}`);
    if (isSelected) {
      rows[0].classList.remove("row-selected");
      rows[1].classList.remove("row-selected");
      this.setState({selection: selection.filter(id => id !== index)});
    } else {
      rows[0].classList.add("row-selected");
      rows[1].classList.add("row-selected");
      const newSelection = selection.slice();
      newSelection.push(index);
      this.setState({selection: newSelection});
    }
  }

  onSelectRow(index) {
    const { selection } = this.state;
    const isSelected = selection.includes(index);
    this.removeSelections(index, isSelected);

  }

  render() {
    const { rows } = this.props;
    const { staticColumns, dynamicColumns, selection } = this.state;
    const rowHeight = 60;

    const dynamicWidth = dynamicColumns.reduce(
      (width, col) => width + col.width + 1,
      0
    );
    const staticWidth = staticColumns.reduce(
      (width, col) => width + col.width + 1,
      0
    );
    return (
      <ScrollSync>
        <Grid>
          <Header
            staticColumns={staticColumns}
            dynamicColumns={dynamicColumns}
            width={staticWidth}
            commitResize={this.commitResize}
          />
          <div style={{ display: "flex" }}>
            <StaticArea
              rows={rows}
              columns={staticColumns}
              rowHeight={rowHeight}
              width={staticWidth}
              onSelectRow={this.onSelectRow}
              selection={selection}
              onCheckboxSelection={this.handleSelection}
            />
            <DynamicArea
              rows={rows}
              columns={dynamicColumns}
              rowHeight={rowHeight}
              width={dynamicWidth}
              onSelectRow={this.onSelectRow}
            />
          </div>
          <Footer
            staticColumns={staticColumns}
            dynamicColumns={dynamicColumns}
            width={staticWidth}
            rowHeight={rowHeight}
          />
        </Grid>
      </ScrollSync>
    );
  }
}

export default ReTable;
