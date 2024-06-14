import { useSelector } from "react-redux";
import { selectDarkMode } from "../projectsSlice";
import { Spinner, Text, Wrapper } from "./styled";

export const Loading = () => {
    const darkMode = useSelector(selectDarkMode);

    return (
        <Wrapper $dark={darkMode}>
            <Text>Please wait, projects are being loaded…</Text>
            <Spinner $dark={darkMode} />
        </Wrapper>
    );
};