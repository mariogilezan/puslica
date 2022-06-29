import './styles/normalize.css';
import { Container, GlobalStyle } from './styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/themes';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ponuda from './components/Ponuda';
import Cenovnik from './components/Cenovnik';
import Footer from './components/Footer';
import Gallery from './components/Gallery';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <>
        <Navbar />
        <Container>
          <Hero />
          <Ponuda />
          <Cenovnik />
          <Gallery />
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
