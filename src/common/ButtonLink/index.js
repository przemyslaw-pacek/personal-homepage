import styled from "styled-components";

export const ButtonLink = styled.a`
  color: ${({ theme }) => theme.colors.button.text};
  background: ${({ theme }) => theme.colors.blue};
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 16px;
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  font-size: 20px;
  padding: 12px 16px;
  margin-top: 32px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.tile.border};
  transition: background 0.3s, 0.3s linear;

  &:hover {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.button.shadow};
  }

  &:active {
    box-shadow: 0 2px ${({ theme }) => theme.colors.button.active} inset;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}px) {
    margin-top: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}px) {
    gap: 12px;
    font-size: 18px;
    border: none;
  }
`;
