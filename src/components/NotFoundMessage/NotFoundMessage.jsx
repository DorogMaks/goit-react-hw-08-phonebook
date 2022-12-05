import { HomeLink, LinkBox, Message, Text } from './NotFoundMessage.styled';
import notFound from 'images/notFound.jpg';

export const NotFoundMessage = () => {
  return (
    <Message>
      <img src={notFound} alt="not found" width="280px" />
      <Text>Sorry, page doesn't exist :(</Text>
      <LinkBox>
        Go <HomeLink to="/">home</HomeLink>
      </LinkBox>
    </Message>
  );
};
