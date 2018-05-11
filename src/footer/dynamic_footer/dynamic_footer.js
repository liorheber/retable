import React, { PureComponent } from "react";
import { ScrollSyncPane } from "react-scroll-sync";

import DynamicFooterWrapper from "./dynamic_footer_wrapper";

import Cell from "../../cell/cell";

class DynamicFooter extends PureComponent {
  render() {
    const { columns, totals } = this.props;
    return (
      <ScrollSyncPane>
        <DynamicFooterWrapper>
          {columns.map(col => (
            <Cell
              width={col.width}
              key={`footer-${col.id}`}
              className={`col-${col.id}`}
              type={col.type}
              value={totals[col.id]}
            />
          ))}
        </DynamicFooterWrapper>
      </ScrollSyncPane>
    );
  }
}

export default DynamicFooter;
