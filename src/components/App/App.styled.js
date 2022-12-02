import styled from 'styled-components';

export const TitleApp = styled.h1`
  margin-bottom: 20px;
`;

export const TitleContacts = styled.h2`
  margin-bottom: 10px;
`;

export const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 26px;
  max-width: 360px;
  transform: translateY(20px);
  border: solid rgb(34, 139, 34);
  border-radius: 5px;
`;

export const Button = styled.button`
  margin-bottom: 20px;

  width: 100px;
  height: 30px;
  background-color: #fff;
  border-radius: 4px;
  cursor: pointer;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    color: #fff;
    background-color: green;
  }
`;
