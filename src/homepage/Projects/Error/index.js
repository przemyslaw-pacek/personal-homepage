import { useSelector } from "react-redux";
import { selectTheme } from "../../Toggle/themeSlice";
import { data } from "../../../common/data/data";
import { Attention, DangerIcon, Wrapper } from "./styled";
import { Button } from "../../../common/Button";
import { Paragraph } from "../../../common/Paragraph";

export const Error = () => {
    const darkMode = useSelector(selectTheme);

    return (
        <Wrapper $dark={darkMode}>
            <DangerIcon />
            <Attention>Ooops! Something went wrong…</Attention>
            <Paragraph>Sorry, failed to load Github projects.<br />
                You can check them directly on Github.</Paragraph>
            <Button $dark={darkMode} href={data.github} target="_blank" rel="noopener noreferrer">
                Go to Github
            </Button>
        </Wrapper>
    );
};