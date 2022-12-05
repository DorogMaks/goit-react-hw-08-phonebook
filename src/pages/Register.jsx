import { Helmet } from 'react-helmet';
import { Section } from 'components/Shared/Section.styled';
import { Container } from 'components/Shared/Container.styled';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

const Register = () => {
  return (
    <>
      <Helmet>
        <title>Registration</title>
      </Helmet>

      <Section>
        <Container>
          <RegisterForm />
        </Container>
      </Section>
    </>
  );
};

export default Register;
