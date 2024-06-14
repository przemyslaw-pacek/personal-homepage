import { Container } from '../common/Container';
import { Footer } from '../features/Footer';
import { Toggle } from '../features/Toggle';
import { Header } from '../features/Header';
import { Projects } from '../features/Projects';
import { Skillset } from '../features/Skillset';
import { ToLearn } from '../features/ToLearn';

function App() {
  return (
    <Container>
      <Toggle />
      <Header />
      <Skillset />
      <ToLearn />
      <Projects />
      <Footer />
    </Container>
  )
};

export default App;
