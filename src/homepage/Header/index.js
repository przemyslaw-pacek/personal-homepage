import { useSelector } from "react-redux";
import { data } from "../../common/data/data";
import { selectTheme } from "../Toggle/themeSlice";
import { Content, Picture, Title, Wrapper, Envelope } from "./styled";
import { Button } from "../../common/Button";
import { Caption } from "../../common/Caption";
import { Paragraph } from "../../common/Paragraph";

export const Header = () => {
    const darkMode = useSelector(selectTheme);

    return (
        <Wrapper>
            <Picture />
            <Content>
                <Caption>This is</Caption>
                <Title $dark={darkMode}>{data.name}</Title>
                <Paragraph>{data.info}</Paragraph>
                <Button $dark={darkMode} href={`mailto:${data.email}`}>
                    <Envelope />
                    Hire Me
                </Button>
            </Content>
        </Wrapper>
    );
};