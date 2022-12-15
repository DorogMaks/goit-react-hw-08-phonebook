import { styled } from '@mui/material/styles';

export const Title = styled('h3')`
  margin: 0;
  margin-bottom: 20px;

  font-size: 26px;
  text-align: center;
`;

export const ButtonsContainer = styled('div')`
  display: flex;

  & button:first-of-type {
    margin-right: 15px;
  }

  & button:last-of-type {
    margin-left: 15px;
  }
`;
