import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Message = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Text = styled.p`
  margin-top: 16px;
  margin-bottom: 16px;
  font-size: 26px;
  font-weight: 600;
  text-align: center;
  color: #777;
`;

export const LinkBox = styled.div`
  font-size: 26px;
  font-weight: 600;
  text-align: center;
  color: #777;
`;

export const HomeLink = styled(Link)`
  color: inherit;
  font-weight: 600;
  /* text-decoration: none; */
  transition: color 250ms ease;

  :hover,
  :focus {
    color: rgb(34, 139, 34);
  }
`;
