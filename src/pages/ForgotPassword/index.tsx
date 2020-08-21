import React, {
  useEffect, useState, useRef, useCallback,
} from 'react';
import { Form } from '@unform/web';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState<string | null>('');
  const [senha, setSenha] = useState<string | null>('');

  const formRef = useRef(null);

  useEffect(() => {
    setEmail(localStorage.getItem('email'));
    setSenha(localStorage.getItem('senha'));
  }, [email, senha]);

  const handleSubmit = useCallback((data: any) => {
    console.log(data);
  }, []);

  return (
    <>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Recuperar senha</h1>
        <input type="text" placeholder="Digite o email" />
        <button type="submit">Confirmar</button>
      </Form>
    </>
  );
};

export default ForgotPassword;
