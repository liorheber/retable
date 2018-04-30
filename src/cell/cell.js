import React, { PureComponent, Fragment } from "react";
import styled from "styled-components";
import Header from "../renderers/header/header";

const RendererStyle = styled.div`
  padding: 0 14px;
  width: 100%;
  box-sizing: border-box;
  align-items: center;
  display: flex;
`;

const getRenderer = type => {
  switch (type) {
    case "HEADER":
      return ({ value }) => <Header value={value} />;
    case "CHANNEL":
      return ({ value = {} }) => (
        <RendererStyle title={value.tooltip}>{value.icon}</RendererStyle>
      );
    case "IMAGE":
      return ({ value }) => (
        <RendererStyle style={{ textAlign: "left" }}>
          <img src={value} height={52} />
        </RendererStyle>
      );
    case "TEXT":
      return ({ value }) => <RendererStyle>{value}</RendererStyle>;
    case "NUMBER":
      return ({ value }) => (
        <RendererStyle style={{ textAlign: "right", width: "100%" }}>
          {value}
        </RendererStyle>
      );
    default:
      return ({ value }) => (
        <RendererStyle>{JSON.stringify(value)}</RendererStyle>
      );
  }
};

const CellStyle = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  white-space: nowrap;
  border-right: 1px solid #e9ebf0;
  align-items: stretch;
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
    const { width, type, value } = this.props;
    const Renderer = getRenderer(type);
    return (
      <CellStyle width={width}>
        <Renderer value={value} />
      </CellStyle>
    );
  }
}

export default Cell;
