import { useSelector } from "react-redux";
import { data } from "../../common/data/data";
import { selectTheme } from "../Toggle/themeSlice";
import { Content, Picture, Title, Wrapper, Envelope } from "./styled";
import { ButtonLink } from "../../common/ButtonLink";
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
                <ButtonLink $dark={darkMode} href={`mailto:${data.email}`}>
                    <Envelope />
                    Hire Me
                </ButtonLink>
            </Content>
        </Wrapper>
    );
};