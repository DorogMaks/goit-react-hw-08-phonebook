import { Helmet } from 'react-helmet';
import { useAuth } from 'hooks';
import { RegisterForm } from 'components/RegisterForm';

const Register = () => {
  const { isRefreshing } = useAuth();

  return (
    !isRefreshing && (
      <>
        <Helmet>
          <title>Registration</title>
        </Helmet>

        <RegisterForm />
      </>
    )
  );
};

export default Register;
