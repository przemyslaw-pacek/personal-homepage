import { GithubSymbol, Title, Wrapper } from "./styled";
import { Paragraph } from "../../../../common/Paragraph";

export const Heading = () => (
    <Wrapper>
        <GithubSymbol />
        <Title>Portfolio</Title>
        <Paragraph>My recent projects</Paragraph>
    </Wrapper>
);