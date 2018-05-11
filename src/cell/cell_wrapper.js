import styled from "styled-components";

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
  z-index: 1;
  transition: min-width 0.4s ease, max-width 0.4s ease;
`;

export default CellWrapper;
