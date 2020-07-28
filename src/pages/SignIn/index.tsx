import React from 'react';

import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="logo" />
      <form>
        <h1>Faça seu logon</h1>
        <Input type="text" icon={FiMail} name="email" placeholder="E-mail" autoFocus />
        <Input type="password" icon={FiLock} name="password" placeholder="Senha" />
        <Button type="submit">Entrar</Button>
        <a href="#/">Esqueci minha senha</a>
      </form>
      <a href="#/">
        <FiLogIn size={20} />
        Criar conta
      </a>
    </Content>
    <Background />
  </Container>
);

export default SignIn;
