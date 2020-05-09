import styled, { css } from 'styled-components';
import { lighten } from 'polished';
import PerfectScrollbar from 'react-perfect-scrollbar';

export const Container = styled.div`
  position: relative;
`;

export const Badge = styled.button`
  position: relative;
  background: none;
  border: 0;

  ${(props) =>
    props.hasUnread &&
    css`
      &::after {
        position: absolute;
        top: 0;
        right: 0;
        content: '';
        height: 8px;
        width: 8px;
        border-radius: 50px;
        background: #ff892e;
      }
    `}
`;

export const NotificationList = styled.div`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: absolute;
  width: 260px;
  left: calc(50% - 130px);
  top: calc(100% + 30px);
  background: rgba(0, 0, 0, 0.6);
  border-radius: 4px;
  padding: 15px 5px;
  color: #fff;

  &::before {
    position: absolute;
    content: '';
    height: 0;
    width: 0;
    top: -20px;
    left: calc(50% - 20px);
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid rgba(0, 0, 0, 0.6);
  }
`;

export const Scroll = styled(PerfectScrollbar)`
  max-height: 260px;
  padding: 5px 15px;
`;

export const Notification = styled.div`
  & + li {
    margin-top: 10px;
    padding-top: 10px;
    border-top: 2px solid #999;
  }

  p {
    font-size: 13px;
    line-height: 18px;
  }

  time {
    font-size: 12px;
    opacity: 0.6;
    display: block;
    margin: 0 0 5px;
  }

  button {
    font-size: 12px;
    background: none;
    border: 0;
    color: ${lighten(0.2, '#7159c1')};

    ${(props) =>
      props.unread &&
      css`
        &::after {
          display: inline-block;
          content: '';
          height: 8px;
          width: 8px;
          margin-left: 5px;
          border-radius: 50px;
          background: #ff892e;
        }
      `}
  }
`;
