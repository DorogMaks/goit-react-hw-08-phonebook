import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editContact } from 'redux/contacts/operations';
import { Button, InputAdornment } from '@mui/material';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import { ButtonsContainer, Title } from './EditFormStyled';
import { CommonInput } from 'components/Shared/CommonElementsStyled';

export const EditForm = ({ onClose, id, contactName, contactNumber }) => {
  const [name, setName] = useState(contactName);
  const [number, setNumber] = useState(contactNumber);

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

    dispatch(editContact({ id, name, number }));

    onClose();
  };

  return (
    <>
      <Title> Update contact </Title>
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
            Update
          </Button>
          <Button variant="outlined" color="error" fullWidth onClick={onClose}>
            Cancel
          </Button>
        </ButtonsContainer>
      </form>
    </>
  );
};

EditForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  contactName: PropTypes.string.isRequired,
  contactNumber: PropTypes.string.isRequired,
};
