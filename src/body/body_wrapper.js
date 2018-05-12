import styled from "styled-components";
import { BODY } from "../resources/z_index";

const BodyWrapper = styled.div`
  display: flex;
  position: relative;
  z-index: ${BODY}
  top: ${props => (props.isLoading ? "-5px" : "0")}
`;

export default BodyWrapper;
