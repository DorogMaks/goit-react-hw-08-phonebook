import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const HeaderStyled = styled.header`
  flex-shrink: 0;

  border-bottom: 1px solid #2a363b;
`;

export const MainStyled = styled.main`
  flex-grow: 1;
`;

export const FooterStyled = styled.footer`
  flex-shrink: 0;

  padding-top: 16px;
  padding-bottom: 16px;
  border-top: 1px solid #2a363b;
`;
