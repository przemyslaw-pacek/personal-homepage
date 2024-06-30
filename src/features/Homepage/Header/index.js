import { data } from "../../../common/data/data";
import { Content, Picture, Title, Wrapper, Envelope } from "./styled";
import { ButtonLink } from "../../../common/ButtonLink";
import { Caption } from "../../../common/Caption";
import { Paragraph } from "../../../common/Paragraph";

export const Header = () => (
    <Wrapper>
        <Picture />
        <Content>
            <Caption>This is</Caption>
            <Title>{data.name}</Title>
            <Paragraph>{data.info}</Paragraph>
            <ButtonLink href={`mailto:${data.email}`} title={data.email}>
                <Envelope />
                Hire Me
            </ButtonLink>
        </Content>
    </Wrapper>
);