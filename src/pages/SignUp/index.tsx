import React, { useCallback } from 'react';

import {
  FiMail, FiLock, FiUser, FiArrowLeft,
} from 'react-icons/fi';

import { Form } from '@unform/web';

import { Link } from 'react-router-dom';

import * as Yup from 'yup';
import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
  const handleSubmit = useCallback(async (data: any) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome é obrigatório'),
        email: Yup.string().required('E-mail é obrigatório').email('Digite um e-mail válido'),
        password: Yup.string().min(8, 'Mínimo de 8 dígitos'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="logo" />
        <Form onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>
          <Input type="text" icon={FiUser} name="name" placeholder="Nome" autoFocus />
          <Input type="text" icon={FiMail} name="email" placeholder="E-mail" />
          <Input type="password" icon={FiLock} name="password" placeholder="Senha" />

          <Button type="submit">Cadastrar</Button>
        </Form>
        <Link to="/">
          <FiArrowLeft size={20} />
          Voltar p/ Logon
        </Link>
      </Content>
    </Container>
  );
};

export default SignUp;
