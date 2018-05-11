import styled from "styled-components";

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  color: ${props => props.theme.fontColor};
  font-smooth: always;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: auto;
  border: 1px solid #e9ebf0;

  .row-hover {
    background-color: ${props => props.theme.hoverBackground};
  }
`;

export default Grid;
