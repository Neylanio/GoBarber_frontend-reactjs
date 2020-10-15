import React, { useCallback } from 'react';
import { FiClock, FiPower } from 'react-icons/fi';
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

import logoImg from '../../assets/logo.svg';
import {
  Container, Header, HeaderContent, Profile, Content, Schedule, Calendar, NextAppointment,
} from './styles';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();
  const { addToast } = useToast();

  const logout = useCallback(() => {
    signOut();
    addToast({
      type: 'info',
      title: 'Usuário saiu',
    });
  }, [signOut, addToast]);

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            <img src={user.avatar_url} alt={user.name} />
            <div>
              <span>Bem vindo, </span>
              <strong>{user.name}</strong>
            </div>
          </Profile>

          <button type="button" onClick={logout}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <Schedule>
          <h1>Horários agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 06</span>
            <span>Segunda-feira</span>
          </p>

          <NextAppointment>
            <strong>Atendimento a seguir</strong>
            <div>
              <img src="https://avatars3.githubusercontent.com/u/15330671?s=460&u=730bfbe3586f4441fc22f780d2e49b7b4c12ae4e&v=4" alt="" />

              <strong>Neylanio Soares</strong>
              <span>
                <FiClock />
                08:00
              </span>
            </div>
          </NextAppointment>

        </Schedule>
        <Calendar />
      </Content>
    </Container>
  );
};

export default Dashboard;
