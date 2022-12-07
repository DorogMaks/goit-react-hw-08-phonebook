import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;

  max-width: calc(100% - 25px);
  border: black solid 1px;
  border-radius: 4px;
  padding: 6px;

  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Contact = styled.p`
  font-size: 16px;
`;

export const Button = styled.button`
  background-color: #fff;
  border-radius: 4px;
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :not(:last-child) {
    margin-right: 10px;
  }

  :hover {
    color: #fff;
    background-color: red;
  }

  :not(:last-child):hover {
    background-color: blue;
  }
`;
