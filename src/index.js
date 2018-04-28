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

  .row-hover {
    background-color: #f9f8fe;
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

  render() {
    const { rows } = this.props;
    const { staticColumns, dynamicColumns } = this.state;
    const rowHeight = 72;

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
            />
            <DynamicArea
              rows={rows}
              columns={dynamicColumns}
              rowHeight={rowHeight}
              width={dynamicWidth}
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
