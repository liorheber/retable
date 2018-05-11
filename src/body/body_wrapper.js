import styled from "styled-components";

const BodyWrapper = styled.div`
  display: flex;
  position: relative;
  top: ${props => props.isLoading ? "-5px" : "0"}
`;

export default BodyWrapper;