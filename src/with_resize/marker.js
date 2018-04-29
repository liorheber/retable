import React, { PureComponent, Fragment } from "react";
import styled from "styled-components";

const Marker = styled.div`
  display: ${props => (props.resizing ? "block" : "none")};
  background: #5699c3;
  width: 3px;
  height: 100%;
  position: fixed;
  z-index: 1000;
  cursor: col-resize;
`;

export default Marker;
