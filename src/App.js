
import Header from './components/header';
import Footer from './components/footer';
import styled from 'styled-components';
import Hero from './components/hero';

const AppContainer = styled.div`
  width: 100%;
`

function App() {
  return (
    <AppContainer>
      <Header />
      <Hero />
      <Footer />
    </AppContainer>
  );
}

export default App;
