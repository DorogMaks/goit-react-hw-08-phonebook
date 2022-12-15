import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { Button, InputAdornment } from '@mui/material';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { CommonInput } from 'components/Shared/CommonElementsStyled';
import { ButtonsContainer, Title } from './ContactFormStyled';

export const ContactForm = ({ onClose }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChange = evt => {
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
      return toast.error(`${name} is already in contacts`);
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
      return toast.error(
        `Number ${number} is already in contacts with name "${checkingContact.checkingName}"`
      );
    }

    dispatch(addContact({ name, number }));

    setName('');
    setNumber('');
    onClose();
  };

  return (
    <>
      <Title> Add new contact </Title>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <CommonInput
          label="Name"
          size="small"
          fullWidth
          variant="outlined"
          type="text"
          name="name"
          required
          value={name}
          onChange={handleChange}
          inputProps={{
            pattern:
              "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
            title:
              "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <PersonOutlineOutlinedIcon />
              </InputAdornment>
            ),
          }}
        />
        <CommonInput
          label="Phone number"
          size="small"
          fullWidth
          variant="outlined"
          type="tel"
          name="number"
          required
          value={number}
          onChange={handleChange}
          inputProps={{
            pattern:
              '\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}',
            title:
              'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <PhoneEnabledIcon />
              </InputAdornment>
            ),
          }}
        />
        <ButtonsContainer>
          <Button type="submit" variant="contained" fullWidth>
            Save
          </Button>
          <Button variant="outlined" color="error" fullWidth onClick={onClose}>
            Cancel
          </Button>
        </ButtonsContainer>
      </form>
    </>
  );
};

ContactForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};
