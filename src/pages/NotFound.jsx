import { Helmet } from 'react-helmet';
import { Section } from 'components/Shared/Section.styled';
import { Container } from 'components/Shared/Container.styled';
import { NotFoundMessage } from 'components/NotFoundMessage/NotFoundMessage';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Not Found</title>
      </Helmet>

      <Section>
        <Container>
          <NotFoundMessage />
        </Container>
      </Section>
    </>
  );
};

export default NotFound;
