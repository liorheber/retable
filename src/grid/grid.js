import React, { PureComponent, Fragment } from "react";
import styled, { injectGlobal } from "styled-components";

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  font-size: 14px;
  font-family: RobotoRg, "Helvetica Neue", sans-serif;
  color: #6e6e6e;
  font-smooth: always;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: auto;
  border: 1px solid #e9ebf0;

  .row-hover {
    background-color: #f9f8fe;
  }
`;

export default Grid;