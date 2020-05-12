import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
// import api from '~/services/api';

import { Container, TimeList, Time } from './styles';

function Dashboard() {
  return (
    <Container>
      <header>
        <button type="button">
          <MdChevronLeft size={36} color="#fff" />
        </button>
        <strong>12 de Maio</strong>
        <button type="button">
          <MdChevronRight size={36} color="#fff" />
        </button>
      </header>
      <TimeList>
        <Time past>
          <strong>12:00</strong>
          <span>Em aberto</span>
        </Time>
        <Time>
          <strong>12:00</strong>
          <span>Eduardo</span>
        </Time>
        <Time available>
          <strong>12:00</strong>
          <span>Em aberto</span>
        </Time>
        <Time>
          <strong>12:00</strong>
          <span>Eduardo</span>
        </Time>
        <Time available>
          <strong>12:00</strong>
          <span>Em aberto</span>
        </Time>
      </TimeList>
    </Container>
  );
}

export default Dashboard;
