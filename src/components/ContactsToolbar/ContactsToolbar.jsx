import { useState } from 'react';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { Modal } from 'components/Modal/Modal';
import { AddButton, Wrapper } from './ContactsToolbarStyled';

export const ContactsToolbar = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  return (
    <Wrapper>
      <Filter />

      <AddButton
        variant="contained"
        endIcon={<PersonAddIcon />}
        onClick={toggleModal}
      >
        Add
      </AddButton>

      {showModal && (
        <Modal onClose={toggleModal}>
          <ContactForm onClose={toggleModal} />
        </Modal>
      )}
    </Wrapper>
  );
};
