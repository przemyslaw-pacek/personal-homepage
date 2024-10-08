import { Item, List, Title, Wrapper } from "./styled";

export const SkillsTile = ({ title, skills }) => (
  <Wrapper>
    <Title>{title}</Title>
    <List>
      {skills.map((skill) => (
        <Item key={skill}>{skill}</Item>
      ))}
    </List>
  </Wrapper>
);
