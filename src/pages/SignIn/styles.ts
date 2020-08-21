import styled from 'styled-components';
import { shade } from 'polished';

import backgroundImg from '../../assets/sign-in-background.png';

export const Container = styled.div`
  display: flex;
  align-items: stretch;
`;

export const Content = styled.section`

  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center;

  width: 100%;
  max-width: 600px;

  margin-top: 20px;

  form {
    margin: 70px 0 30px 0;
    width: 340px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      margin-bottom: 24px;
    }

    button {
      width: 100%;
      height: 56px;
      background: #ff9000;
      border-radius: 10px;
      border: 0;
      padding: 0 16px;
      color: #312e38;
      font-weight: 500;
      margin-top: 16px;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#ff9000')};
      }
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    color: #ff9000;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 6px;
    }

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }
`;

export const Background = styled.section`
  height: 100vh;
  flex: 1;
  background: url(${backgroundImg}) no-repeat center;
  background-size: cover;
`;
