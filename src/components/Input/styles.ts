import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`

  background: #232129;
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 2px solid #232129;
  color: #666360;

  ${(props) => props.isFocused && css`
    border-color: #ff9000;
    color: #ff9000;
  `}

  ${(props) => props.isFilled && css`
    color: #ff9000;
  `}

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
    margin-right: 16px;
  }

`;
