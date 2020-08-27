import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import GlobalStyled from './styles/global';
import { AuthProvider } from './hooks/AuthContext';

import ToastContainer from './components/ToastContainer';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </AuthProvider>

    <ToastContainer />

    <GlobalStyled />
  </>
);

export default App;
