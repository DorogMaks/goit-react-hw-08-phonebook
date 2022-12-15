import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

export const Wrapper = styled('div')`
  display: flex;
`;

export const AddButton = styled(Button)`
  background-color: ${({ theme }) => theme.palette.success.light};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.palette.success.main};
  }
`;
