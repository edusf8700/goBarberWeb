import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/logo.svg';

function SignIn() {
  return (
    <>
      <img src={logo} alt="goBarber" />

      <form>
        <input type="e-mail" placeholder="Seu e-mail" />
        <input type="password" placeholder="Sua senha secreta" />

        <button type="submit">Acessar</button>
        <Link to="/register">Ciar conta gratuita</Link>
      </form>
    </>
  );
}

export default SignIn;
