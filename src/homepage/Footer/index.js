import { useSelector } from "react-redux";
import { data } from "../../common/data/data";
import { selectTheme } from "../Toggle/themeSlice";
import {
    Content,
    Hand,
    IconFB,
    IconGithub,
    IconInstagram,
    IconLink,
    IconLinkedIN,
    Icons,
    Info,
    Mail,
    Wrapper
} from "./styled";
import { Caption } from "../../common/Caption";

export const Footer = () => {
    const darkMode = useSelector(selectTheme);

    const socialMediaLinks = [
        { key: 'github', icon: <IconGithub /> },
        { key: 'facebook', icon: <IconFB /> },
        { key: 'linkedIN', icon: <IconLinkedIN /> },
        { key: 'instagram', icon: <IconInstagram /> }
    ];

    return (
        <Wrapper>
            <Caption>Let's talk!</Caption>
            <Content $dark={darkMode}>
                <Mail $dark={darkMode} href={`mailto:${data.email}`}>
                    {data.email}
                </Mail>
                <Info>
                    {data.footer}
                    {" "}
                    <Hand />
                </Info>
                <Icons>
                    {socialMediaLinks.map(link =>
                        data[link.key] && (
                            <IconLink
                                key={link.key}
                                $dark={darkMode}
                                href={data[link.key]}
                                target="_blank"
                                rel="noopener noreferrer">
                                {link.icon}
                            </IconLink>

                        )
                    )}
                </Icons>
            </Content>
        </Wrapper>
    );
};