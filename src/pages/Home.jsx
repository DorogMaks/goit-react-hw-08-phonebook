import { Helmet } from 'react-helmet';
import { Section } from 'components/Shared/Section.styled';
import { Container } from 'components/Shared/Container.styled';
import { WelcomeMessage } from 'components/WelcomeMessage/WelcomeMessage';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>

      <Section>
        <Container>
          <WelcomeMessage />
        </Container>
      </Section>
    </>
  );
};

export default Home;
