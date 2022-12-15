import { styled } from '@mui/material/styles';

export const ModalBackdrop = styled('div')`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled('div')`
  position: absolute;
  top: 50%;
  left: 50%;

  min-width: 300px;
  width: calc(100% - 20px);
  max-width: 400px;
  padding: 30px;

  background-color: white;

  border-radius: 10px;
  outline: transparent;

  box-shadow: ${({ theme }) => theme.shadows[6]};

  transform: translate(-50%, -50%);

  overflow: hidden;
`;
