import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [email, setEmail] = useState<string | null>('');
  const [senha, setSenha] = useState<string | null>('');

  useEffect(() => {
    setEmail(localStorage.getItem('email'));
    setSenha(localStorage.getItem('senha'));
  }, [email, senha]);

  return (
    <>
      <h1>Email & Senha</h1>
      <p>{email}</p>
      <p>{senha}</p>
      <Link to="/">Logout</Link>
    </>
  );
};

export default Home;
