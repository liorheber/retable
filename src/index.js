import React, { PureComponent, Fragment } from "react";
import { ScrollSync, ScrollSyncPane } from "react-scroll-sync";
import { injectGlobal, ThemeProvider } from "styled-components";
import Header from "./header/header";
import Footer from "./footer/footer";
import Grid from "./grid/grid";
import withResize from "./features/with_resize/with_resize";
import withSelection from "./features/with_selection/with_selection";
import Body from "./body/body";
import Loader from "./components/loader/loader";
import withSort from "./features/with_sort/with_sort";
import withFilter from "./features/with_filter/with_filter";
import withColumns from "./features/with_columns/with_columns";

import defaultTheme from "./themes/default";
import withRenderers from "./features/with_renderers/with_renderers";

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

  render() {
    const {
      rows,
      rowHeight,
      totals,
      theme,
      staticColumns,
      dynamicColumns,
      isLoading
    } = this.props;

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
            />
            {isLoading && <Loader />}
            <Body
              rows={rows}
              staticColumns={staticColumns}
              staticWidth={staticWidth}
              dynamicColumns={dynamicColumns}
              dynamicWidth={dynamicWidth}
              rowHeight={rowHeight}
              isLoading={isLoading}
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

export default withColumns(
  withRenderers(withFilter(withSort(withSelection(withResize(ReTable)))))
);
