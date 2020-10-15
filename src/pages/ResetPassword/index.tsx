import React, { useRef, useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { FiLock } from 'react-icons/fi';

import * as Yup from 'yup';

import { Form } from '@unform/web';

import { FormHandles } from '@unform/core';
import getValidationErrors from '../../utils/getValidationErros';
import logoImg from '../../assets/logo.svg';
import { useToast } from '../../hooks/toast';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container, Content, AnimationContainer, Background,
} from './styles';
import api from '../../services/api';

interface ResetPasswordFormData {
  password: string;
  password_confirmation: string;
}

const ResetPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();
  const history = useHistory();

  const location = useLocation();

  const handleSubmit = useCallback(async (data: ResetPasswordFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        password: Yup.string().required('Senha obrigatória'),
        passwordConfirmation: Yup.string()
          .oneOf([Yup.ref('password'), undefined], 'Confirmação incorreta'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const token = location.search.replace('?token=', '');

      if (!token) {
        throw new Error();
      }

      await api.post('/password/reset', {
        password: data.password,
        password_confirmation: data.password_confirmation,
        token,
      });

      addToast({
        type: 'success',
        title: 'Alterações salvas com sucesso',
      });

      history.push('/');
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const errors = getValidationErrors(error);
        formRef.current?.setErrors(errors);

        return;
      }
      addToast({
        type: 'error',
        title: 'Erro ao resetar senha',
        description: 'Ocorreu um erro ao resetar sua senha, tente novamente',
      });
    }
  }, [addToast, history, location.search]);

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="logo" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Resetar senha</h1>
            <Input type="password" icon={FiLock} name="password" placeholder="Nova senha" autoFocus />
            <Input type="password" icon={FiLock} name="password_confirmation" placeholder="Confirmação da senha" />
            <Button type="submit">Alterar senha</Button>
          </Form>
        </AnimationContainer>
      </Content>

      <Background />
    </Container>
  );
};

export default ResetPassword;
