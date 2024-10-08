import {
  Content,
  Description,
  Headline,
  Link,
  LinkTitle,
  Links,
} from "./styled";

export const ProjectTile = ({ codeLink, demoLink, description, title }) => (
  <Content>
    <Headline>{title.replace(/-/g, " ")}</Headline>
    <Description>{description}</Description>
    <Links>
      <LinkTitle>Demo:</LinkTitle>
      <Link href={demoLink} target="_blank" rel="noopener noreferrer">
        {demoLink}
      </Link>
      <LinkTitle>Code:</LinkTitle>
      <Link href={codeLink} target="_blank" rel="noopener noreferrer">
        {codeLink}
      </Link>
    </Links>
  </Content>
);
