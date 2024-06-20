import { useSelector } from "react-redux";
import { selectTheme } from "../../Toggle/themeSlice";
import { Spinner, Text, Wrapper } from "./styled";

export const Loading = () => {
    const darkMode = useSelector(selectTheme);

    return (
        <Wrapper $dark={darkMode}>
            <Text>Please wait, projects are being loaded…</Text>
            <Spinner $dark={darkMode} />
        </Wrapper>
    );
};