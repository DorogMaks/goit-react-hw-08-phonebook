import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import {
  ButtonsContainer,
  ContactName,
  DeleteIcon,
  PromptMessage,
  Title,
} from './DeleteContactPromptStyled';

export const DeleteContactPrompt = ({ onClose, id, contactName }) => {
  const dispatch = useDispatch();

  const onDelContact = () => dispatch(deleteContact(id));

  return (
    <>
      <Title> Delete contact </Title>
      <DeleteIcon />
      <ContactName>{`${contactName}`}</ContactName>
      <PromptMessage>
        Are you sure that you want to delete this contact?
      </PromptMessage>

      <ButtonsContainer>
        <Button
          type="submit"
          variant="contained"
          color="error"
          fullWidth
          onClick={onDelContact}
        >
          Delete
        </Button>
        <Button variant="contained" fullWidth onClick={onClose}>
          Cancel
        </Button>
      </ButtonsContainer>
    </>
  );
};

DeleteContactPrompt.propTypes = {
  onClose: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  contactName: PropTypes.string.isRequired,
};
