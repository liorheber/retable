import React, { PureComponent } from "react";

import BodyWrapper from "./body_wrapper";
import StaticArea from "../static_area/static_area";
import DynamicArea from "../dynamic_area/dynamic_area";

class Body extends PureComponent {
  render() {
    const {
      rows,
      staticColumns,
      staticWidth,
      dynamicColumns,
      dynamicWidth,
      rowHeight,
      isLoading
    } = this.props;

    return (
      <BodyWrapper isLoading={isLoading}>
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
      </BodyWrapper>
    );
  }
}

export default Body;
