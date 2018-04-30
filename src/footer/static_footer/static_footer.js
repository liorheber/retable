import React, { PureComponent, Fragment } from "react";
import { ScrollSyncPane } from "react-scroll-sync";
import styled from "styled-components";

const Static = styled.div`
  overflow: hidden;
  position: relative;
  z-index: 2;
  background: white;
  min-width: ${props => props.width + 80}px;
  max-width: ${props => props.width + 80}px;
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
    const { columns, width, totals } = this.props;
    return (
      <Static width={width}>
        Total
      </Static>
    );
  }
}

export default StaticFooter;
