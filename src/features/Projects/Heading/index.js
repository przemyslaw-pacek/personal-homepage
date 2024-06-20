import { useSelector } from "react-redux";
import { selectTheme } from "../../Toggle/themeSlice";
import { GithubSymbol, Title, Wrapper } from "./styled";
import { Paragraph } from "../../../common/Paragraph";

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