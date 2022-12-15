import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from 'components/AppBar/AppBar';
import { FooterMessage } from 'components/FooterMessage/FooterMessage';

export const Layout = () => {
  return (
    <>
      <AppBar />

      <main>
        <section>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </section>
      </main>

      <footer>
        <FooterMessage />
      </footer>

      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
