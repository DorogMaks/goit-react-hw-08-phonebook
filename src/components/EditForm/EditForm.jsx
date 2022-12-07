import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editContact } from 'redux/contacts/operations';
import {
  Button,
  ButtonClose,
  Buttons,
  Form,
  Input,
  Label,
  Span,
} from './EditForm.styled';

export const EditForm = ({ onClose, id, contactName, contactNumber }) => {
  const [name, setName] = useState(contactName);
  const [number, setNumber] = useState(contactNumber);

  const dispatch = useDispatch();

  const handleСhange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    dispatch(editContact({ id, name, number }));

    onClose();
  };

  return (
    <Form autoComplete="off" onSubmit={handleSubmit}>
      <Label>
        <Span>Name</Span>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleСhange}
        />
      </Label>
      <Label>
        <Span>Number</Span>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleСhange}
        />
      </Label>
      <Buttons>
        <Button type="submit">Save contact</Button>
        <ButtonClose type="button" onClick={onClose}>
          Cancel
        </ButtonClose>
      </Buttons>
    </Form>
  );
};

EditForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  userNumber: PropTypes.string.isRequired,
};
