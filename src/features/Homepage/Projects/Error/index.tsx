import { data } from "../../../../common/data/data";
import { Attention, DangerIcon, Wrapper } from "./styled";
import { ButtonLink } from "../../../../common/ButtonLink";
import { Paragraph } from "../../../../common/Paragraph";

export const Error = () => (
  <Wrapper>
    <DangerIcon />
    <Attention>Ooops! Something went wrong…</Attention>
    <Paragraph>
      Sorry, failed to load Github projects.
      <br />
      You can check them directly on Github.
    </Paragraph>
    <ButtonLink href={data.github} target="_blank" rel="noopener noreferrer">
      Go to Github
    </ButtonLink>
  </Wrapper>
);
