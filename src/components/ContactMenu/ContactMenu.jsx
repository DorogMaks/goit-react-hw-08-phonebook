import PropTypes from 'prop-types';
import { useRef } from 'react';
import { Divider, IconButton, Menu, MenuItem } from '@mui/material';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { ContactMenuWrapper, MenuItemText } from './ContactMenuStyled';

export const ContactMenu = ({
  isOpened,
  setIsOpened,
  toggleEditModal,
  toggleDeleteModal,
}) => {
  const contactMenuButton = useRef(null);

  return (
    <ContactMenuWrapper>
      <IconButton
        aria-label="Contact menu"
        id="contact-menu-button"
        ref={contactMenuButton}
        aria-controls={isOpened ? 'contact-menu' : false}
        aria-expanded={isOpened ? 'true' : false}
        aria-haspopup="true"
        onClick={() => setIsOpened(!isOpened)}
      >
        <MoreVertOutlinedIcon />
      </IconButton>
      <Menu
        id="contact-menu"
        MenuListProps={{
          'aria-labelledby': 'contact-menu-button',
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        anchorEl={contactMenuButton.current}
        open={isOpened}
        onClose={() => setIsOpened(false)}
      >
        <MenuItem
          onClick={() => {
            setIsOpened(false);
            toggleEditModal();
          }}
        >
          <EditOutlinedIcon />
          <MenuItemText>Edit contact</MenuItemText>
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={() => {
            setIsOpened(false);
            toggleDeleteModal();
          }}
        >
          <DeleteOutlineOutlinedIcon color="error" />
          <MenuItemText red="true">Delete contact</MenuItemText>
        </MenuItem>
      </Menu>
    </ContactMenuWrapper>
  );
};

ContactMenu.propTypes = {
  isOpened: PropTypes.bool.isRequired,
  setIsOpened: PropTypes.func.isRequired,
  toggleEditModal: PropTypes.func.isRequired,
  toggleDeleteModal: PropTypes.func.isRequired,
};
