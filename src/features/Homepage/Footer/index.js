import { data } from "../../../common/data/data";
import {
  Content,
  Hand,
  Icon,
  IconFB,
  IconGithub,
  IconInstagram,
  IconLink,
  IconLinkedIN,
  Icons,
  Info,
  Mail,
  Wrapper,
} from "./styled";
import { Caption } from "../../../common/Caption";

export const Footer = () => {
  const socialMediaLinks = [
    { key: "github", icon: <IconGithub /> },
    { key: "facebook", icon: <IconFB /> },
    { key: "linkedIN", icon: <IconLinkedIN /> },
    { key: "instagram", icon: <IconInstagram /> },
  ];

  return (
    <Wrapper>
      <Caption>Let's talk!</Caption>
      <Content>
        <Mail href={`mailto:${data.email}`}>{data.email}</Mail>
        <Info>
          {data.footer} <Hand />
        </Info>
        <Icons>
          {socialMediaLinks.map(
            (link) =>
              data[link.key] && (
                <Icon key={link.key}>
                  <IconLink
                    href={data[link.key]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.icon}
                  </IconLink>
                </Icon>
              )
          )}
        </Icons>
      </Content>
    </Wrapper>
  );
};
