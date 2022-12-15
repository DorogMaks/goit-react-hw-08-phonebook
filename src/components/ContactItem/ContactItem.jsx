import PropTypes from 'prop-types';
import { useState } from 'react';
import { Divider } from '@mui/material';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import { EditForm } from 'components/EditForm/EditForm';
import { DeleteContactPrompt } from 'components/DeleteContactPrompt/DeleteContactPrompt';
import { ContactMenu } from 'components/ContactMenu/ContactMenu';
import {
  ContactContainer,
  ListItem,
  Name,
  NameContainer,
  PhoneContainer,
} from './ContactItemStyled';
import { Modal } from 'components/Modal/Modal';

export const ContactItem = ({ id, name, number }) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const toggleEditModal = () => {
    setShowEditModal(prevState => !prevState);
  };

  const toggleDeleteModal = () => {
    setShowDeleteModal(prevState => !prevState);
  };

  return (
    <ListItem isMenuOpened={isMenuOpened}>
      <ContactContainer>
        <NameContainer>
          <Name>{name}</Name>
          <Divider />
        </NameContainer>
        <PhoneContainer>
          <PhoneAndroidOutlinedIcon color="primary" />
          {number}
        </PhoneContainer>
      </ContactContainer>

      <ContactMenu
        isOpened={isMenuOpened}
        setIsOpened={setIsMenuOpened}
        toggleEditModal={toggleEditModal}
        toggleDeleteModal={toggleDeleteModal}
      />

      {showEditModal && (
        <Modal onClose={toggleEditModal}>
          <EditForm
            onClose={toggleEditModal}
            id={id}
            contactName={name}
            contactNumber={number}
          />
        </Modal>
      )}
      {showDeleteModal && (
        <Modal onClose={toggleDeleteModal}>
          <DeleteContactPrompt
            onClose={toggleDeleteModal}
            id={id}
            contactName={name}
          />
        </Modal>
      )}
    </ListItem>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
