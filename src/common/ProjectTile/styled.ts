import styled from "styled-components";

export const Content = styled.div`
  background: ${({ theme }) => theme.colors.tile.background};
  max-width: 592px;
  font-size: 18px;
  line-height: 25px;
  padding: 50px;
  border: 6px solid ${({ theme }) => theme.colors.tile.border};
  border-radius: 4px;
  box-shadow: 0 16px 58px ${({ theme }) => theme.colors.tile.shadow},
    0 -2px 50px ${({ theme }) => theme.colors.tile.shadow};
  transition: background 0.3s, border 0.3s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.tile.hover};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}px) {
    padding: 26px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    max-width: 692px;
    font-size: 16px;
    line-height: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}px) {
    font-size: 14px;
    line-height: 17px;
    padding: 18px;
  }
`;

export const Headline = styled.h3`
  color: ${({ theme }) => theme.colors.blue};
  font-size: 24px;
  line-height: 29px;
  margin-top: 0;
  transition: color 0.3s;
  text-transform: capitalize;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    font-size: 20px;
    line-height: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}px) {
    font-size: 16px;
    line-height: 20px;
  }
`;

export const Description = styled.p`
  margin-bottom: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}px) {
    margin-bottom: 16px;
  }
`;

export const Links = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 8px;
`;

export const LinkTitle = styled.span``;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.blue};
  text-decoration-color: ${({ theme }) => theme.colors.bottomBorder};
  text-underline-offset: 4px;
  text-decoration-thickness: 1px;
  transition: color 0.3s, text-decoration-color 0.3s;

  &:hover {
    text-decoration-color: ${({ theme }) => theme.colors.blue};
    text-decoration-thickness: unset;
  }
`;
