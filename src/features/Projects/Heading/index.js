import { useSelector } from "react-redux";
import { selectDarkMode } from "../projectsSlice";
import { GithubSymbol, Paragraph, Title, Wrapper } from "./styled";

export const Heading = () => {
    const darkMode = useSelector(selectDarkMode);

    return (
        <Wrapper $dark={darkMode}>
            <GithubSymbol $dark={darkMode} />
            <Title>Portfolio</Title>
            <Paragraph>My recent projects</Paragraph>
        </Wrapper>
    );
};