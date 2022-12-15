import { styled } from '@mui/material/styles';

export const MessageContainer = styled('div')`
  position: absolute;
  top: 50%;
  left: 50%;

  width: 80%;
  margin: 0;

  font-size: 22px;
  font-weight: 600;

  color: white;

  text-align: center;

  transform: translate(-50%, -50%);

  @media screen and (min-width: 768px) {
    font-size: 36px;
  }
`;
