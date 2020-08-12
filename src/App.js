import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global-styles';
import Sidebar from './components/Sidebar/index';
import Player from './components/Player/index';
import { Wrapper, Container, Content } from './styles/components';
import Header from './components/Header/index';
import Routes from './routes/index';
import store from './store/index';
import ErrorBox from './components/ErrorBox';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
        <Wrapper>
        <GlobalStyle />
        <Container>
          <Sidebar />
          <Content>
            <ErrorBox />
            <Header />
            <Routes />
          </Content>
        </Container>
        <Player />
      </Wrapper>
    </BrowserRouter>
  </Provider>
);

export default App;
