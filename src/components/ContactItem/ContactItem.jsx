import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { Modal } from 'components/Modal/Modal';
import { Button, Contact, ListItem } from './ContactItem.styled';
import { EditForm } from 'components/EditForm/EditForm';

export const ContactItem = ({ id, name, number }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  const dispatch = useDispatch();

  const onDelContact = () => dispatch(deleteContact(id));

  return (
    <ListItem>
      <Contact>
        {name}: {number}
      </Contact>
      <div>
        <Button type="button" onClick={toggleModal}>
          Edit
        </Button>
        <Button type="button" onClick={onDelContact}>
          Delete
        </Button>
      </div>
      {showModal && (
        <Modal onClose={toggleModal}>
          <EditForm
            onClose={toggleModal}
            id={id}
            contactName={name}
            contactNumber={number}
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
