import styled from 'styled-components';

export const List = styled.ul`
  /* display: block;
  height: 450px;
  overflow: auto; */

  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 260px);
  overflow: auto;
`;
