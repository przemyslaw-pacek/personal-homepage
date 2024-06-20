import { useSelector } from "react-redux";
import { selectTheme } from "../../Toggle/themeSlice";
import { Spinner, Wrapper } from "./styled";
import { Paragraph } from "../../../common/Paragraph";

export const Loading = () => {
    const darkMode = useSelector(selectTheme);

    return (
        <Wrapper $dark={darkMode}>
            <Paragraph>Please wait, projects are being loaded…</Paragraph>
            <Spinner $dark={darkMode} />
        </Wrapper>
    );
};