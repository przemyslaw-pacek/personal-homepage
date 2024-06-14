import { useSelector } from "react-redux";
import { selectDarkMode } from "../../features/Projects/projectsSlice";
import { List, Title, Wrapper } from "./styled";

export const SkillsTile = ({ title, skills }) => {
    const darkMode = useSelector(selectDarkMode);

    return (
        <Wrapper $dark={darkMode}>
            <Title $dark={darkMode}>{title}</Title>
            <List $dark={darkMode}>
                {skills?.map(skill =>
                    <li key={skill}>{skill}</li>
                )}
            </List>
        </Wrapper>
    );
};