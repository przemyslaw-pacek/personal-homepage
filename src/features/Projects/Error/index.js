import { useSelector } from "react-redux";
import { selectDarkMode } from "../../Toggle/themeSlice";
import { data } from "../../../common/data/data";
import { Attention, DangerIcon, Text, Wrapper } from "./styled";
import { Button } from "../../../common/Button";

export const Error = () => {
    const darkMode = useSelector(selectDarkMode);

    return (
        <Wrapper $dark={darkMode}>
            <DangerIcon />
            <Attention>Ooops! Something went wrong…</Attention>
            <Text>Sorry, failed to load Github projects.<br />
                You can check them directly on Github.</Text>
            <Button $dark={darkMode} href={data.github} target="_blank" rel="noopener noreferrer">
                Go to Github
            </Button>
        </Wrapper>
    );
};