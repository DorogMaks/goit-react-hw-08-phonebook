import { styled } from '@mui/material/styles';
import { Avatar, IconButton } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';

export const IconButtonStyled = styled(IconButton)`
  padding: 8px;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  background-color: #64b5f6;

  &:hover,
  &:focus {
    background-color: #1976d2;
  }
`;

export const MenuIcon = styled(MenuBookIcon)`
  font-size: 32px;
  color: #fff;
`;

export const ContentContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 300px;
  height: 100%;
  padding: 30px 20px;
`;

export const AvatarStyled = styled(Avatar)`
  margin-bottom: 20px;
  width: 120px;
  height: 120px;
  background-color: #1976d2;
  font-size: 60px;
`;

export const UserGreetings = styled('p')`
  margin-bottom: 10px;

  color: ${({ theme }) => theme.palette.text.secondary};

  font-size: 24px;

  text-align: center;
`;

export const UserName = styled('h4')`
  display: block;

  flex-grow: 1;

  width: min-content;
  margin-top: 0;

  font-size: 26px;
  text-align: center;
`;
