import { Container } from "../../common/Container";
import { SkillsTile } from "../../common/SkillsTile";
import { data } from "../../common/data/data";
import { Header } from "./Header";
import { Toggle } from "./Toggle";
import { Projects } from "./Projects";
import { Footer } from "./Footer";

const Homepage = () => (
  <Container>
    <Toggle />
    <Header />
    <SkillsTile title="My skillset includes 🛠️" skills={data.skills} />
    <SkillsTile title="What I want to learn next 🚀" skills={data.toLearn} />
    <Projects />
    <Footer />
  </Container>
);

export default Homepage;
