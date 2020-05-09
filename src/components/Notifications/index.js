import React, { useState, useEffect } from 'react';
import { MdNotifications } from 'react-icons/md';
import { formatDistance, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';

import {
  Container,
  Badge,
  Scroll,
  NotificationList,
  Notification,
} from './styles';

function Notifications() {
  const [visible, setVisible] = useState(true);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    async function loadNotifications() {
      const response = await api.get('/notifications');

      const data = response.data.map((notification) => ({
        ...notification,
        dateDistance: formatDistance(
          parseISO(notification.createdAt),
          new Date(),
          { addSuffix: true, locale: pt }
        ),
      }));

      setNotifications(data);
    }

    loadNotifications();
  }, []);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <Badge hasUnread onClick={handleToggleVisible}>
        <MdNotifications size={20} color="#7159c1" />
      </Badge>

      <NotificationList hasUnread visible={visible}>
        <Scroll>
          {notifications.map((notification) => (
            <Notification unread>
              <p>{notification.content}</p>
              <time>{notification.dateDistance}</time>
              <button type="button">Marcar com lida</button>
            </Notification>
          ))}
        </Scroll>
      </NotificationList>
    </Container>
  );
}

export default Notifications;
