import React, { PureComponent, Fragment } from "react";
import styled from "styled-components";
import StaticArea from "../static_area/static_area";
import DynamicArea from "../dynamic_area/dynamic_area";

const BodySyle = styled.div`
  display: flex;
  position: relative;
  top: ${props => props.isLoading ? "-5px" : "0"}
`;

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
      <BodySyle isLoading={isLoading}>
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
      </BodySyle>
    );
  }
}

export default Body;
