import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo-purple.svg';
import { Container, Content, Profile } from './styles';

function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="BoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>Eduardo Freitas</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Eduardo Freitas"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

export default Header;
