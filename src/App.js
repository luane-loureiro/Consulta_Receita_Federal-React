// src/App.js

import { Container } from './styles';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import MenuMobile from './components/MenuMobile';
import ConectaAPI from './components/ConectaAPI';  // Importação sem alterações
import './style.css';

const App = () => {
  return (
    <Container>
      <Header />
      <Main title="Consulta">
        <ConectaAPI />
      </Main>
      <Footer />
      <MenuMobile />
    </Container>
  );
}

export default App;
