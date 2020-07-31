<h1 align="center">
  <p><img src='./src/assets/logo-purple.svg' height="88"></p>
  ✂ GoBarber
  <p> Sistema web para agendamento de serviço de barbearia</p>
</h1>

<p align="center">
	<a href="https://www.linkedin.com/in/edusf8700" target="_blank" rel="noopener noreferrer">
    <img alt="Made by" src="https://img.shields.io/badge/Feito%20por-Eduardo%20Freitas-%237159c1">
  </a>
 <img alt="GitHub" src="https://img.shields.io/github/license/edusf8700/goBarberWeb?color=%237159c1">
</p>

<h1 align="center">
  <p align="center">
    <img src="./.github/mockups.gif">
  </p>

</h1>


## ✂ Sobre
Esta é uma aplicação web, onde o prestador de serviço da barbearia consulta a sua agenda do dia, sabendo quais os horários estam agendados e o nome do cliente. Também é notificado quando um cliente marca um agendamento com ele.


## ✅ Requisitos
1. Ter o **NodeJs** e o **Yarn** instalado
2. Ter instâncias do **Redis**, **MongoDb** e **PostgreSQL** em execução

## :rocket: Instruções para testar a aplicação em modo de desenvolvimento

### Iniciando o back-end
1. ``git clone https://github.com/edusf8700/backend-gobarber.git``
2. ``cd backend-gobarber``
3. ``yarn``
4. ``Criar o arquivo .env com base no .env.example``
5. ``yarn sequelize db:migrate``
6. ``yarn dev``
7. ``yarn queue``

### Iniciando o front-end
1. ``cd ..``
2. ``git clone https://github.com/edusf8700/goBarberWeb.git``
3. ``cd goBarberWeb``
4. ``yarn``
5. ``yarn start``


## 🧰  Ferramentas utilizadas
- ⚛️ **ReactJs** - Biblioteca Javascript para criar interfaces de usuário.
- 🖋 **Styled Components** - Biblioteca Javascript pra estilizar componentes.
- 🔚 **Redux** - Biblioteca JavaScript de código aberto para gerenciar o estado do aplicativo.
- 🔙 **Redux Saga** - Biblioteca Javascript que torna os efeitos colaterais do aplicativo mais faceis de gerenciar.

## 📝 License

Este projeto está licenciado sob a licença MIT - consulte o arquivo [LICENSE] (LICENSE) para obter detalhes.

---
<p> Feito por Eduardo Freitas. :rocket: [Veja meu Linkedin](https://www.linkedin.com/in/edusf8700)</p>






