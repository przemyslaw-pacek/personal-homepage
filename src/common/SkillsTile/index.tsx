import { Item, List, Title, Wrapper } from "./styled";

interface SkillsTileProps {
  title: string;
  skills: Array<string>;
}

export const SkillsTile = ({ title, skills }: SkillsTileProps) => (
  <Wrapper>
    <Title>{title}</Title>
    <List>
      {skills.map((skill) => (
        <Item key={skill}>{skill}</Item>
      ))}
    </List>
  </Wrapper>
);
