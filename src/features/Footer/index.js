import { useSelector } from "react-redux";
import { data } from "../../common/data/data";
import { selectDarkMode } from "../Toggle/themeSlice";
import {
    Caption,
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

export const Footer = () => {
    const darkMode = useSelector(selectDarkMode);

    return (
        <Wrapper $dark={darkMode}>
            <Caption $dark={darkMode}>Let's talk!</Caption>
            <Mail $dark={darkMode} href={`mailto:${data.email}`}>{data.email}</Mail>
            <Info>{data.footer}</Info>
            <Icons>
                {data.github &&
                    <IconLink href={data.github} target="_blank" rel="noopener noreferrer">
                        <IconGithub />
                    </IconLink>
                }
                {data.facebook &&
                    <IconLink href={data.facebook} target="_blank" rel="noopener noreferrer">
                        <IconFB />
                    </IconLink>
                }
                {data.linkedIN &&
                    <IconLink href={data.linkedIN} target="_blank" rel="noopener noreferrer">
                        <IconLinkedIN />
                    </IconLink>
                }
                {data.instagram &&
                    <IconLink href={data.instagram} target="_blank" rel="noopener noreferrer">
                        <IconInstagram />
                    </IconLink>
                }
            </Icons>
        </Wrapper>
    );
};