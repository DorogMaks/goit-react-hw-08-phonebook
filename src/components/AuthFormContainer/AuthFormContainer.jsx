import { PropTypes } from 'prop-types';
import {
  Container,
  FormHint,
  FormTitle,
  FormWindow,
} from './AuthFormContainerStyled';

export const AuthFormContainer = ({ title, hint, children }) => (
  <Container>
    <FormWindow>
      <FormTitle>{title}</FormTitle>
      <FormHint>{hint}</FormHint>
      {children}
    </FormWindow>
  </Container>
);

AuthFormContainer.propTypes = {
  title: PropTypes.string.isRequired,
  hint: PropTypes.string.isRequired,
};
