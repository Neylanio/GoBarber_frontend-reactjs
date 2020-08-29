import React, { useCallback } from 'react';
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();
  const { addToast } = useToast();

  const logout = useCallback(() => {
    signOut();
    addToast({
      type: 'info',
      title: 'Usuário saiu',
    });
  }, [signOut, addToast]);

  return (
    <>
      <strong>Dashboard</strong>
      <button type="button" onClick={logout}>
        Logout
      </button>
    </>
  );
};

export default Dashboard;
