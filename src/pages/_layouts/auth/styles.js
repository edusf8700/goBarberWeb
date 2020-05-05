import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  background: linear-gradient(-90deg, #7159c1, #ab59c1);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

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

    a {
      margin: 15px 0 0;
      color: #fff;
      font-size: 16px;
      opacity: 0.7;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
