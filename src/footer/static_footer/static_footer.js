import React, { PureComponent, Fragment } from "react";
import { ScrollSyncPane } from "react-scroll-sync";
import styled from "styled-components";

import { SelectionConsumer } from "../../features/with_selection/with_selection";

const Static = styled.div`
  overflow: hidden;
  position: relative;
  z-index: 2;
  background: ${props => props.theme.background};
  min-width: ${props => props.width + props.widthOffset}px;
  max-width: ${props => props.width + props.widthOffset}px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 0 24px;
  box-sizing: border-box;
  border-right: 1px solid #e9ebf0;
  text-transform: uppercase;
`;

class StaticFooter extends PureComponent {
  render() {
    const { width } = this.props;
    return (
      <SelectionConsumer>
        {({ onSelectAll, selection, isAllSelected, withSelection }) => {
          const widthOffset = 40 + (withSelection ? 40 : 10);
          return (
            <Static width={width} widthOffset={widthOffset}>
              Total
            </Static>
          );
        }}
      </SelectionConsumer>
    );
  }
}

export default StaticFooter;
