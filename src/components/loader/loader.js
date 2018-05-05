import React from "react";
import { LinearProgress } from "material-ui/Progress";
import styled from "styled-components";

const LoaderStyle = styled.div`
  position: sticky;
  top: 52px;
  z-index: 1000;
`;

const Loader = () => (
  <LoaderStyle>
    <LinearProgress />
  </LoaderStyle>
);

export default Loader;
