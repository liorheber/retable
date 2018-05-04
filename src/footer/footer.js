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
  background: ${props => props.theme.background};
  overflow: hidden;
  white-space: nowrap;
  height: 52px;
  margin-top: -30px;
  box-shadow: 0px -1px 6px 0px ${props => props.theme.rowBorder};
  color: ${props => props.theme.footerFontColor};
`;

class Footer extends PureComponent {

  render() {
    const { dynamicColumns, width, totals } = this.props;
    return (
        <FooterStyle>
          <StaticFooter width={width}/>
          <DynamicFooter columns={dynamicColumns} totals={totals}/>
        </FooterStyle>
    );
  }
}


export default Footer;