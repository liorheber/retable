import styled from "styled-components";

const StaticFooterWrapper = styled.div`
  overflow: hidden;
  position: relative;
  z-index: 2;
  background: ${props => props.theme.background};
  min-width: ${props => props.width + props.widthOffset}px;
  max-width: ${props => props.width + props.widthOffset}px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 0 24px;
  box-sizing: border-box;
  border-right: 1px solid #e9ebf0;
  text-transform: uppercase;
`;

export default StaticFooterWrapper;
