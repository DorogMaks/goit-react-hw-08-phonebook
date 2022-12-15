import { styled } from '@mui/material/styles';

export const ListItem = styled('li')`
  position: relative;

  max-width: 350px;
  width: 100%;
  padding: 15px;

  background-color: white;

  border-radius: 10px;

  opacity: ${({ isMenuOpened }) => (isMenuOpened ? 0.5 : 0.95)};

  overflow: hidden;

  box-shadow: ${({ theme }) => theme.shadows[6]};

  transition: ${({ theme }) =>
    theme.transitions.create(['opacity', 'transform'], {
      duration: theme.transitions.duration.standard,
    })};

  @media screen and (min-width: 768px) {
    max-width: 450px;
  }
`;

export const ContactContainer = styled('div')`
  display: flex;
  flex-direction: column;

  flex-grow: 1;
`;

export const NameContainer = styled('div')`
  width: 100%;
`;

export const Name = styled('p')`
  margin: 0;

  font-size: 18px;
  font-weight: 700;
  line-height: 1.2;

  color: ${({ theme }) => theme.palette.primary.dark};

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const PhoneContainer = styled('p')`
  display: flex;
  align-items: center;

  margin-top: 10px;

  font-size: 18px;
  font-weight: 600;

  color: ${({ theme }) => theme.palette.text.primary};

  text-decoration: none;

  & :first-of-type {
    margin-right: 5px;
  }
`;
