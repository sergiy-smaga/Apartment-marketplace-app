import styled from 'styled-components';

export const StyledForm = styled.form`
  border: 2px solid grey;
  margin-bottom: 20px;
  border-radius: 5px;
  padding: 15px;
  label {
    display: block;
    margin-bottom: 10px;
  }
  input {
    display: block;
    margin-bottom: 10px;
  }
  button {
    display: block;
    margin-bottom: 10px;
    cursor: pointer;
    :hover {
      background-color: coral;
    }
  }
`;
