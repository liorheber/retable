import styled from "styled-components";
import { BACK } from "../resources/z_index";

const CellWrapper = styled.div`
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
  z-index: ${BACK};
  transition: min-width 0.4s ease, max-width 0.4s ease;
`;

export default CellWrapper;
