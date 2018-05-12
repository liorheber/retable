import React from "react";
import { LinearProgress } from "material-ui/Progress";
import styled from "styled-components";

import { MODAL } from "../../resources/z_index";

const LoaderStyle = styled.div`
  position: sticky;
  top: 52px;
  z-index: ${MODAL};
`;

const Loader = () => (
  <LoaderStyle>
    <LinearProgress />
  </LoaderStyle>
);

export default Loader;
