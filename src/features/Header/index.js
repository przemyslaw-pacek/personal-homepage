import { useSelector } from "react-redux";
import { data } from "../../common/data/data";
import { selectDarkMode } from "../Toggle/themeSlice";
import {
    Content,
    Info,
    Picture,
    Title,
    Caption,
    Wrapper,
    Envelope
} from "./styled";
import { Button } from "../../common/Button";

export const Header = () => {
    const darkMode = useSelector(selectDarkMode);

    return (
        <Wrapper>
            <Picture />
            <Content>
                <Caption>This is</Caption>
                <Title $dark={darkMode}>{data.name}</Title>
                <Info>{data.info}</Info>
                <Button $dark={darkMode} href={`mailto:${data.email}`}>
                    <Envelope />
                    Hire Me
                </Button>
            </Content>
        </Wrapper>
    );
};