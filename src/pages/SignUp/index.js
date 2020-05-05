import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/logo.svg';

function SignUp() {
  return (
    <>
      <img src={logo} alt="goBarber" />

      <form>
        <input placeholder="Nome completo" />
        <input type="e-mail" placeholder="Seu e-mail" />
        <input type="password" placeholder="Sua senha secreta" />

        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login</Link>
      </form>
    </>
  );
}

export default SignUp;
