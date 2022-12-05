import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavigationStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavigationLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #2a363b;

  &.active {
    color: rgb(34, 139, 34);
  }
`;