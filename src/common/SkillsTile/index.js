import { useSelector } from "react-redux";
import { selectTheme } from "../../features/Toggle/themeSlice";
import { Item, List, Title, Wrapper } from "./styled";

export const SkillsTile = ({ title, skills }) => {
    const darkMode = useSelector(selectTheme);

    return (
        <Wrapper $dark={darkMode}>
            <Title $dark={darkMode}>{title}</Title>
            <List $dark={darkMode}>
                {skills.map(skill =>
                    <Item key={skill}>{skill}</Item>
                )}
            </List>
        </Wrapper>
    );
};