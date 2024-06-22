import { data } from '../common/data/data';
import { Container } from '../common/Container';
import { Toggle } from '../homepage/Toggle';
import { Header } from '../homepage/Header';
import {SkillsTile} from '../common/SkillsTile';
import { Projects } from '../homepage/Projects';
import { Footer } from '../homepage/Footer';

function App() {
  return (
    <Container>
      <Toggle />
      <Header />
      <SkillsTile
        title="My skillset includes 🛠️"
        skills={data.skills}
      />
      <SkillsTile
        title="What I want to learn next 🚀"
        skills={data.toLearn}
      />
      <Projects />
      <Footer />
    </Container>
  );
};

export default App;
