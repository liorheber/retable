import React, { PureComponent, Fragment } from "react";
import { ScrollSync, ScrollSyncPane } from "react-scroll-sync";
import { injectGlobal, ThemeProvider } from "styled-components";
import Header from "./header/header";
import Footer from "./footer/footer";
import Grid from "./grid/grid";
import withResize from "./with_resize/with_resize";
import withSelection from "./with_selection/with_selection";
import Body from "./body/body";
import withSort from "./with_sort/with_sort";
import withFilter from "./with_filter/with_filter";

import defaultTheme from "./themes/default";

injectGlobal`
  @font-face {
    font-family:  'RobotoRg';
    src:          url('https://cdn.kenshoo.com/resources/fonts/roboto/Roboto-Regular.ttf') format('truetype');
    font-weight:  normal;
    font-style:   normal;
}
`;

class ReTable extends PureComponent {
  static defaultProps = {
    rowHeight: 60,
    rows: [],
    totals: [],
    theme: defaultTheme
  };

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
      dynamicColumns
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
    const { rows, rowHeight, totals, theme } = this.props;
    const { staticColumns, dynamicColumns } = this.state;

    const dynamicWidth = dynamicColumns.reduce(
      (width, col) => width + col.width + 1,
      0
    );
    const staticWidth = staticColumns.reduce(
      (width, col) => width + col.width + 1,
      0
    );
    return (
      <ThemeProvider theme={theme}>
        <ScrollSync>
          <Grid>
            <Header
              staticColumns={staticColumns}
              dynamicColumns={dynamicColumns}
              width={staticWidth}
              commitResize={this.commitResize}
            />
            <Body
              rows={rows}
              staticColumns={staticColumns}
              staticWidth={staticWidth}
              dynamicColumns={dynamicColumns}
              dynamicWidth={dynamicWidth}
              rowHeight={rowHeight}
            />
            <Footer
              dynamicColumns={dynamicColumns}
              width={staticWidth}
              rowHeight={rowHeight}
              totals={totals}
            />
          </Grid>
        </ScrollSync>
      </ThemeProvider>
    );
  }
}

export default withFilter(withSort(withSelection(withResize(ReTable))));
