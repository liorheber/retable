import React, {PureComponent, Fragment} from "react";
import { ScrollSyncPane } from "react-scroll-sync";
import styled from 'styled-components';
import StaticFooter from "./static_footer/static_footer";
import DynamicFooter from "./dynamic_footer/dynamic_footer";

const FooterStyle = styled.div`
  display: flex;
  position: sticky;
  z-index: 2;
  bottom: 0;
  z-index: 3;
  background: white;
  overflow: hidden;
  white-space: nowrap;
  height: 52px;
  margin-top: -30px;
  box-shadow: 0px -1px 6px 0px #E9EBF0;
  color: #000000;
`;

class Footer extends PureComponent {

  render() {
    const { staticColumns, dynamicColumns, width, totals } = this.props;
    return (
        <FooterStyle>
          <StaticFooter columns={staticColumns} width={width} totals={totals}/>
          <DynamicFooter columns={dynamicColumns} totals={totals}/>
        </FooterStyle>
    );
  }
}


export default Footer;