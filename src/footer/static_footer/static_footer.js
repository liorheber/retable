import React, { PureComponent } from "react";
import { ScrollSyncPane } from "react-scroll-sync";

import { SelectionConsumer } from "../../features/with_selection/with_selection";
import { TreeConsumer } from "../../features/with_tree/with_tree";
import StaticFooterWrapper from "./static_footer_wrapper";

class StaticFooter extends PureComponent {
  render() {
    const { width } = this.props;
    return (
      <TreeConsumer>
        {({ withTree }) => (
          <SelectionConsumer>
            {({ onSelectAll, selection, isAllSelected, withSelection }) => {
              const widthOffset =
                (withTree ? 40 : 10) + (withSelection ? 40 : 10);
              return (
                <StaticFooterWrapper width={width} widthOffset={widthOffset}>
                  Total
                </StaticFooterWrapper>
              );
            }}
          </SelectionConsumer>
        )}
      </TreeConsumer>
    );
  }
}

export default StaticFooter;
