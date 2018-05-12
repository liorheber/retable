import styled from "styled-components";
import { DYNAMIC_AREA } from "../resources/z_index";

const DynamicWrapper = styled.div`
  overflow: auto;
  position: relative;
  z-index: ${DYNAMIC_AREA};
  background: ${props => props.theme.background};
  display: flex;
  flex-direction: column;
`;

export default DynamicWrapper;
