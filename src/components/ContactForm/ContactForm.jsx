import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import {
  Button,
  ButtonClose,
  Buttons,
  Form,
  Input,
  Label,
  Span,
} from './ContactForm.styled';

export const ContactForm = ({ onClose }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);
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

    const checkingName = contacts.find(item => {
      return item.name === name;
    });

    if (checkingName) {
      return alert(`${name} is already in contacts`);
    }

    const checkingContact = contacts.reduce(
      (acc, item) => {
        if (item.number === number) {
          acc.checkingName = item.name;
          acc.status = true;
        }
        return acc;
      },
      { status: false, checkingName: '' }
    );

    if (checkingContact.status) {
      return alert(
        `Number ${number} is already in contacts \nwith name ${checkingContact.checkingName}`
      );
    }

    dispatch(addContact({ name, number }));

    setName('');
    setNumber('');
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
