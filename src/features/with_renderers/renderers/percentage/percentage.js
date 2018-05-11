import React, { PureComponent } from "react";
import styled from "styled-components";
import Renderer from "../renderer";

const BarWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 0.8;
`;

const Label = styled.div`
  display: flex;
  margin-right: 10px;
`;

const Bar = styled.div`
  display: flex;
  min-width: ${props => props.width}%;
  height: 10px;
  background: rgb(122, 188, 255);
  background: -moz-linear-gradient(
    left,
    rgba(122, 188, 255, 1) 0%,
    rgba(96, 171, 248, 1) 44%,
    rgba(64, 150, 238, 1) 100%
  );
  background: -webkit-linear-gradient(
    left,
    rgba(122, 188, 255, 1) 0%,
    rgba(96, 171, 248, 1) 44%,
    rgba(64, 150, 238, 1) 100%
  );
  background: linear-gradient(
    to right,
    rgba(122, 188, 255, 1) 0%,
    rgba(96, 171, 248, 1) 44%,
    rgba(64, 150, 238, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#7abcff', endColorstr='#4096ee',GradientType=1 );
`;

export class PercentageRenderer extends PureComponent {
  render() {
    const { value } = this.props;
    return value ? <Renderer>
        <BarWrapper>
          <Label>{`${value}% `}</Label>
          <Bar width={value} title={`${value}%`} />
        </BarWrapper>
      </Renderer> : null;
  }
}

export default PercentageRenderer;
