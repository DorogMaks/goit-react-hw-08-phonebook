import { Helmet } from 'react-helmet';
import { Section } from 'components/Shared/Section.styled';
import { Container } from 'components/Shared/Container.styled';
import { LoginForm } from 'components/LoginForm/LoginForm';

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>

      <Section>
        <Container>
          <LoginForm />
        </Container>
      </Section>
    </>
  );
};

export default Login;
