import { styled } from '@mui/material/styles';

export const List = styled('ul')`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  justify-items: center;

  margin: 0;
  padding: 20px;

  list-style: none;

  @media screen and (min-width: 768px) {
    gap: 30px;

    padding: 30px;
  }
`;
