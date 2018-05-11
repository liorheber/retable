import styled from "styled-components";

const DynamicFooterWrapper = styled.div`
  overflow: auto;
  position: relative;
  z-index: 2;
  background: ${props => props.theme.background};
  display: flex;
  flex-direction: row;
`;

export default DynamicFooterWrapper;
