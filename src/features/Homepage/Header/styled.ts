import styled from "styled-components";
import image from "../../../common/data/image.jpg";
import { ReactComponent as envelope } from "./envelope.svg";

export const Wrapper = styled.header`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 72px;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}px) {
    gap: 42px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    grid-template-columns: auto;
    gap: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}px) {
    gap: 16px;
  }
`;

export const Picture = styled.div`
  width: 288px;
  aspect-ratio: 0.75;
  background-image: url("${image}");
  background-size: cover;
  background-position: center;
  border-radius: 2%;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}px) {
    width: 192px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}px) {
    width: 96px;
  }
`;

export const Content = styled.div`
  max-width: 630px;
  align-self: center;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.headerText};
  font-weight: ${({ theme }) => theme.fontWeights.heavy};
  font-size: 38px;
  line-height: 1.2;
  margin: 16px 0 32px;
  transition: color 0.3s;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}px) {
    font-size: 30px;
    margin: 12px 0 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}px) {
    font-size: 22px;
    margin-top: 8px;
  }
`;

export const Envelope = styled(envelope)`
  @media (max-width: ${({ theme }) => theme.breakpoints.phone}px) {
    width: 18px;
  }
`;
