import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 20px;

  &:hover {
    opacity: 0.7;
  }

  label {
    cursor: pointer;

    img {
      height: 90px;
      width: 90px;
      border-radius: 50%;
      border: 3px solid rgba(255, 255, 255, 0.3);
      background: #eee;
    }

    input {
      display: none;
    }
  }
`;
