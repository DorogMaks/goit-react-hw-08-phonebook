import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { LinearProgress, TextField } from '@mui/material';

export const CommonInput = styled(TextField)`
  margin-bottom: 20px;

  & fieldset {
    transition: ${({ theme }) =>
      theme.transitions.create(['border-color', 'transform'], {
        duration: theme.transitions.duration.standard,
      })};
  }
`;

export const CommonParagraph = styled('p')`
  display: block;

  margin: 0;
  margin-bottom: 30px;

  color: ${({ theme }) => theme.palette.text.secondary};
`;

export const CommonLink = styled(Link)`
  color: ${({ theme }) => theme.palette.primary.light};

  transition: ${({ theme }) =>
    theme.transitions.create(['color', 'transform'], {
      duration: theme.transitions.duration.standard,
    })};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.palette.primary.dark};
  }
`;

export const CommonLinearProgress = styled(LinearProgress)`
  position: absolute;
  bottom: 0;
  left: 0;

  width: 100%;
  height: 6px;

  opacity: ${({ isvisible }) => isvisible};

  transition: ${({ theme }) =>
    theme.transitions.create(['opacity', 'transform'], {
      duration: theme.transitions.duration.standard,
    })};
`;
