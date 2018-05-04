import React, { PureComponent, Fragment } from "react";
import styled from "styled-components";

const Marker = styled.div`
  display: ${props => (props.resizing ? "block" : "none")};
  background: linear-gradient(to right, transparent, transparent 47% ,#5699c380 48%, #5699c380 52%, transparent 53%);
  width: 80px;
  height: 100%;
  position: fixed;
  z-index: 1000;
  cursor: col-resize;
`;

export default Marker;
