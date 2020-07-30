import React from 'react';

import {
  FiMail, FiLock, FiUser, FiArrowLeft,
} from 'react-icons/fi';

import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => (
  <Container>
    <Background />
    <Content>
      <img src={logoImg} alt="logo" />
      <form>
        <h1>Faça seu cadastro</h1>
        <Input type="text" icon={FiUser} name="name" placeholder="Nome" autoFocus />
        <Input type="text" icon={FiMail} name="email" placeholder="E-mail" />
        <Input type="password" icon={FiLock} name="password" placeholder="Senha" />

        <Button type="submit">Cadastrar</Button>
      </form>
      <Link to="/">
        <FiArrowLeft size={20} />
        Voltar p/ Logon
      </Link>
    </Content>
  </Container>
);

export default SignUp;
