import { Helmet } from 'react-helmet';
import { useAuth } from 'hooks';
import { LoginForm } from 'components/LoginForm';

const Login = () => {
  const { isRefreshing } = useAuth();

  return (
    !isRefreshing && (
      <>
        <Helmet>
          <title>Login</title>
        </Helmet>

        <LoginForm />
      </>
    )
  );
};

export default Login;
