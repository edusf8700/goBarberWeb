import React from 'react';
import { MdNotifications } from 'react-icons/md';

import {
  Container,
  Badge,
  Scroll,
  NotificationList,
  Notification,
} from './styles';

function Notifications() {
  return (
    <Container>
      <Badge hasUnread>
        <MdNotifications size={20} color="#7159c1" />
      </Badge>

      <NotificationList>
        <Scroll>
          <Notification unread>
            <p>Você tem uma novo agendamento para amanhã</p>
            <time>Há duas horas</time>
            <button type="button">Marcar com lida</button>
          </Notification>
          <Notification>
            <p>Você tem uma novo agendamento para amanhã</p>
            <time>Há duas horas</time>
            <button type="button">Marcar com lida</button>
          </Notification>
          <Notification>
            <p>Você tem uma novo agendamento para amanhã</p>
            <time>Há duas horas</time>
            <button type="button">Marcar com lida</button>
          </Notification>
          <Notification>
            <p>Você tem uma novo agendamento para amanhã</p>
            <time>Há duas horas</time>
            <button type="button">Marcar com lida</button>
          </Notification>
          <Notification>
            <p>Você tem uma novo agendamento para amanhã</p>
            <time>Há duas horas</time>
            <button type="button">Marcar com lida</button>
          </Notification>
          <Notification>
            <p>Você tem uma novo agendamento para amanhã</p>
            <time>Há duas horas</time>
            <button type="button">Marcar com lida</button>
          </Notification>
        </Scroll>
      </NotificationList>
    </Container>
  );
}

export default Notifications;
