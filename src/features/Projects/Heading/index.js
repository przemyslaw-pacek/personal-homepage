import { useSelector } from "react-redux";
import { selectTheme } from "../../Toggle/themeSlice";
import { GithubSymbol, Paragraph, Title, Wrapper } from "./styled";

export const Heading = () => {
    const darkMode = useSelector(selectTheme);

    return (
        <Wrapper $dark={darkMode}>
            <GithubSymbol $dark={darkMode} />
            <Title>Portfolio</Title>
            <Paragraph>My recent projects</Paragraph>
        </Wrapper>
    );
};