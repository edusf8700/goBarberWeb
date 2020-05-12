import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    button {
      background: none;
      border: 0;
    }

    strong {
      color: #fff;
      font-size: 24px;
      margin: 0 15px;
    }
  }
`;

export const TimeList = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;
  margin-top: 30px;
`;

export const Time = styled.li`
  padding: 20px;
  background: #fff;
  border-radius: 4px;
  opacity: ${(props) => (props.past ? 0.7 : 1)};

  strong {
    display: block;
    font-size: 20px;
    font-weight: normal;
    color: ${(props) => (props.available ? '#999' : '#7159c1')};
  }

  span {
    display: block;
    margin-top: 3px;
    color: #666;
  }
`;
