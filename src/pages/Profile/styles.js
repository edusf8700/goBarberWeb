import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      margin: 0 0 10px;
      padding: 0 15px;
      color: #fff;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    hr {
      margin: 10px 0 20px;
      height: 1px;
      border: 0;
      background: rgba(255, 255, 255, 0.2);
    }

    button {
      margin: 5px 0 0;
      background: #3b9eff;
      border: 0;
      border-radius: 4px;
      height: 44px;
      color: #fff;
      font-weight: bold;
      font-weight: 16px;
      transform: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#3b9eff')};
      }
    }

    span {
      color: #fb6f91;
      align-self: start;
      font-weight: bold;
      margin: 0 0 10px;
    }
  }

  > button {
    width: 100%;
    margin: 10px 0 0;
    background: #f64c75;
    border: 0;
    border-radius: 4px;
    height: 44px;
    color: #fff;
    font-weight: bold;
    font-weight: 16px;
    transform: background 0.2s;

    &:hover {
      background: ${darken(0.06, '#f64c75')};
    }
  }
`;
