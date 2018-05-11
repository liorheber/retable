import styled from "styled-components";

const DynamicWrapper = styled.div`
  overflow: auto;
  position: relative;
  z-index: 2;
  background: ${props => props.theme.background};
  display: flex;
  flex-direction: column;
`;

export default DynamicWrapper;
