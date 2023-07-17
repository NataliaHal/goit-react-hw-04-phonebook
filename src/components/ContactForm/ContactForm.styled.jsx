import styled from 'styled-components';

export const Form = styled.form`
  max-width: 350px;
  border-radius: 5px;
  padding: 10px;
  background-color: #18829e;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  font-size: 24px;
`;

export const Input = styled.input`
  width: 250px;
  height: 20px;
  margin-top: 2px;
  border: none;
  border-radius: 10px;
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 3px 5px;
  width: 120px;
  border: none;
  font-weight: 500;
  border-radius: 10px;

  :hover {
    color: blue;
    scale: 1.05;
    cursor: pointer;
    background-color: #234a5c;
    transition: background-color 200ms linear;
    transition: scale 200ms linear;
  }
`;
