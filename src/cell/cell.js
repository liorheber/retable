import React, { PureComponent, Fragment } from "react";
import styled from "styled-components";
import { RenderersConsumer } from "../features/with_renderers/with_renderers";

const CellStyle = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  white-space: nowrap;
  border-right: 1px solid ${props => props.theme.columnBorder};
  align-items: center;
  height: 100%;
  justify-content: space-between;
  min-width: ${props => props.width}px;
  max-width: ${props => props.width}px;
  position: relative;
  z-index: 1;
  transition: min-width 0.4s ease, max-width 0.4s ease;
`;

class Cell extends PureComponent {
  render() {
    const { width, type, value, id, col } = this.props;
    return (
      <CellStyle width={width}>
        <RenderersConsumer>
          {({ getRenderer }) => {
            const Renderer = getRenderer(type);
            return <Renderer value={value} id={id} {...col} />;
          }}
        </RenderersConsumer>
      </CellStyle>
    );
  }
}

export default Cell;
