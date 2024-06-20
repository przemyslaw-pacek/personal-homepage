import { useSelector } from "react-redux";
import { Content, Description, Headline, Link, LinkTitle, Links } from "./styled";
import { selectTheme } from "../../features/Toggle/themeSlice";

export const ProjectTile = ({ codeLink, demoLink, description, title }) => {
    const darkMode = useSelector(selectTheme);

    return (
        <Content $dark={darkMode}>
            <Headline $dark={darkMode}>{title.replace(/-/g, ' ')}</Headline>
            <Description>{description}</Description>
            <Links>
                <LinkTitle>Demo:</LinkTitle>
                <Link $dark={darkMode} href={demoLink} target="_blank" rel="noopener noreferrer">
                    {demoLink}
                </Link>
                <LinkTitle>Code:</LinkTitle>
                <Link $dark={darkMode} href={codeLink} target="_blank" rel="noopener noreferrer">
                    {codeLink}
                </Link>
            </Links>
        </Content>
    );
};