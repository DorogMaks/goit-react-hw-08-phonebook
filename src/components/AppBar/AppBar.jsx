import { useSelector } from 'react-redux';
import { useAuth } from 'hooks';
import { selectIsLoading } from 'redux/contacts/selectors';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { ContactsToolbar } from 'components/ContactsToolbar/ContactsToolbar';
import { CommonLinearProgress } from 'components/Shared/CommonElementsStyled';
import {
  ContactsToolbarContainer,
  UnauthorizedPageLogo,
  AuthorizedPageLogo,
  AppBarStyled,
  PageLogoText,
  PhoneIconStyled,
} from './AppBarStyled';

export const AppBar = () => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const isLoading = useSelector(selectIsLoading);

  return (
    <AppBarStyled>
      {isLoggedIn ? (
        <AuthorizedPageLogo>
          <PhoneIconStyled />
          <PageLogoText>Phonebook</PageLogoText>
        </AuthorizedPageLogo>
      ) : (
        <UnauthorizedPageLogo>
          <PhoneIconStyled />
          <PageLogoText>Phonebook</PageLogoText>
        </UnauthorizedPageLogo>
      )}

      {isLoggedIn && !isRefreshing ? (
        <ContactsToolbarContainer>
          <ContactsToolbar />
        </ContactsToolbarContainer>
      ) : null}

      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      <CommonLinearProgress isvisible={isRefreshing || isLoading ? '1' : '0'} />
    </AppBarStyled>
  );
};
