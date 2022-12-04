import { Notification } from 'components/Notification/Notification';
import { Container } from 'components/Shared/Container.styled';
import { Section } from 'components/Shared/Section.styled';

const NotFound = () => {
  return (
    <Section>
      <Container>
        <Notification message="Sorry, we couldn't find that page :(" />
      </Container>
    </Section>
  );
};

export default NotFound;
