import { useAuth } from 'hooks';
import { NavigationLink } from './AuthNavStyled';

export const AuthNav = () => {
  const { isRefreshing } = useAuth();

  return (
    !isRefreshing && (
      <nav>
        <NavigationLink to="/register">Register</NavigationLink>
        <NavigationLink to="/login">Login</NavigationLink>
      </nav>
    )
  );
};
