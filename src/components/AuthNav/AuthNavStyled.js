import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';

export const NavigationLink = styled(NavLink)`
  padding-top: 16px;
  padding-bottom: 16px;

  color: ${({ theme }) => theme.palette.text.primary};

  font-size: 18px;
  font-weight: 600;

  text-decoration: none;

  transition: ${({ theme }) =>
    theme.transitions.create(['color', 'transform'], {
      duration: theme.transitions.duration.standard,
    })};

  &:not(:last-child) {
    margin-right: 20px;
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.primary.contrastText};
  }

  &.active {
    color: ${({ theme }) => theme.palette.primary.contrastText};
  }
`;
