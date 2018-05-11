import styled from 'styled-components';

const FooterWrapper = styled.div`
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

export default FooterWrapper;