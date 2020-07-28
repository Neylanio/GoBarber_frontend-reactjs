import styled from 'styled-components';

export const Container = styled.div`

  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px;
  width: 100%;
  color: #666360;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  input {

    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 30px #232129 inset;
      -webkit-text-fill-color: #f4ede8 !important;
    }

    background: transparent;
    flex: 1;
    border: 0;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    color: #666360;
    margin-right: 16px;
  }

`;
