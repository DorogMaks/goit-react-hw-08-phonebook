import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from '../AppBar/AppBar';
import { FooterMessage } from 'components/FooterMessage/FooterMessage';
import { GlobalStyles } from 'components/Shared/GlobalStyles.styled';
import {
  FooterStyled,
  HeaderStyled,
  MainStyled,
  Wrapper,
} from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <GlobalStyles />

      <Wrapper>
        <HeaderStyled>
          <AppBar />
        </HeaderStyled>

        <MainStyled>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </MainStyled>

        <FooterStyled>
          <FooterMessage />
        </FooterStyled>

        <Toaster position="top-right" reverseOrder={false} />
      </Wrapper>
    </>
  );
};
