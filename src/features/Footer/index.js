import { useSelector } from "react-redux";
import { data } from "../../common/data/data";
import { selectDarkMode } from "../Toggle/themeSlice";
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
    const darkMode = useSelector(selectDarkMode);

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
                    {data.github &&
                        <IconLink
                            $dark={darkMode}
                            href={data.github}
                            target="_blank"
                            rel="noopener noreferrer">
                            <IconGithub />
                        </IconLink>
                    }
                    {data.facebook &&
                        <IconLink
                            $dark={darkMode}
                            href={data.facebook}
                            target="_blank"
                            rel="noopener noreferrer">
                            <IconFB />
                        </IconLink>
                    }
                    {data.linkedIN &&
                        <IconLink
                            $dark={darkMode}
                            href={data.linkedIN}
                            target="_blank"
                            rel="noopener noreferrer">
                            <IconLinkedIN />
                        </IconLink>
                    }
                    {data.instagram &&
                        <IconLink
                            $dark={darkMode}
                            href={data.instagram}
                            target="_blank"
                            rel="noopener noreferrer">
                            <IconInstagram />
                        </IconLink>
                    }
                </Icons>
            </Content>
        </Wrapper>
    );
};