import React, { useRef, useCallback } from 'react';
import { useHistory, Link } from 'react-router-dom';

import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import * as Yup from 'yup';

import { Form } from '@unform/web';

import { FormHandles } from '@unform/core';
import getValidationErrors from '../../utils/getValidationErros';
import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';
import { useAuth } from '../../hooks/AuthContext';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const history = useHistory();

  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();

  const handleSubmit = useCallback(async (data: SignInFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
        password: Yup.string().required('Senha obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      signIn({
        email: data.email,
        password: data.password,
      });

      history.push('/home');
    } catch (error) {
      const errors = getValidationErrors(error);
      formRef.current?.setErrors(errors);
    }
  }, [signIn]);

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="logo" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu Logon</h1>
          <Input name="email" icon={FiMail} placeholder="E-mail" autoFocus />
          <Input type="password" icon={FiLock} name="password" placeholder="Senha" />
          <Button type="submit">Entrar</Button>
          <Link to="/forgot-password">Esqueci minha senha</Link>
        </Form>
        <Link to="/signup">
          <FiLogIn size={20} />
          Criar conta
        </Link>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
