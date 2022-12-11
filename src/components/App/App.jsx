import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { useAuth } from 'hooks';
import { refreshUser } from 'redux/auth/operations';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';

const HomePage = lazy(() => import('pages/Home'));
const RegisterPage = lazy(() => import('pages/Register'));
const LoginPage = lazy(() => import('pages/Login'));
const ContactsPage = lazy(() => import('pages/Contacts'));
const NotFoundPage = lazy(() => import('pages/NotFound'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing contacts...</b>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
