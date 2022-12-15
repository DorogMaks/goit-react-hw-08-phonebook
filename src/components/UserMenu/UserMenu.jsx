import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, SwipeableDrawer } from '@mui/material';
import { useAuth } from 'hooks';
import { logOut } from 'redux/auth/operations';
import { stringAvatar } from './helpers/stringAvatar';
import {
  AvatarStyled,
  ContentContainer,
  IconButtonStyled,
  MenuIcon,
  UserGreetings,
  UserName,
} from './UserMenuStyled';

export const UserMenu = () => {
  const { user } = useAuth();

  const [isMenuShown, setIsMenuShown] = useState(false);

  const dispatch = useDispatch();

  const handleLogOut = () => dispatch(logOut());

  const customAvatar = stringAvatar(user.name);

  return (
    <>
      <IconButtonStyled
        disabled={isMenuShown}
        onClick={() => setIsMenuShown(true)}
      >
        <MenuIcon />
      </IconButtonStyled>
      <SwipeableDrawer
        anchor="right"
        open={isMenuShown}
        onOpen={() => setIsMenuShown(true)}
        onClose={() => setIsMenuShown(false)}
      >
        <ContentContainer>
          <AvatarStyled {...customAvatar} />
          <UserGreetings>Welcome to your phonebook!</UserGreetings>
          <UserName>{user.name}</UserName>
          <Button
            fullWidth
            variant="contained"
            color="error"
            onClick={handleLogOut}
          >
            Logout
          </Button>
        </ContentContainer>
      </SwipeableDrawer>
    </>
  );
};
