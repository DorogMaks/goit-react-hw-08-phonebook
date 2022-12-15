import { styled } from '@mui/material/styles';
import { AppBar } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';

export const AppBarStyled = styled(AppBar)`
  position: sticky;
  z-index: 1;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  min-height: 76px;
  padding: 14px 20px;
`;

export const UnauthorizedPageLogo = styled('h1')`
  display: flex;
  margin: 0;

  font-size: 20px;

  @media screen and (min-width: 420px) {
    font-size: 24px;
  }

  @media screen and (min-width: 440px) {
    font-size: 28px;
  }

  @media screen and (min-width: 480px) {
    font-size: 30px;
  }

  @media screen and (min-width: 520px) {
    font-size: 32px;
  }
`;

export const AuthorizedPageLogo = styled('h1')`
  @media screen and (max-width: 599px) {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;

    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }

  display: flex;
  margin: 0;

  font-size: 20px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }

  @media screen and (min-width: 860px) {
    font-size: 28px;
  }

  @media screen and (min-width: 960px) {
    font-size: 32px;
  }
`;

export const PhoneIconStyled = styled(PhoneIcon)`
  font-size: inherit;
`;

export const PageLogoText = styled('span')`
  display: block;
  margin-left: 10px;
`;

export const ContactsToolbarContainer = styled('div')`
  margin-right: 10px;

  @media screen and (min-width: 600px) {
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
  }
`;
