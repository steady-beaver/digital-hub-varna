import styled from "styled-components";
import { theme } from "styles";
import device from "styles/mediaQueries";

export const Frame = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.green.dark};
  border-top: none;
  min-height: 100px;
  padding: 10px;
  width: 700px;
  display: flex;
  font-weight: 300;

  &:first-child {
    border-top: 1px solid ${({ theme }) => theme.colors.green.dark};
    border-top-left-radius: ${theme.round[1]};
    border-top-right-radius: ${theme.round[1]};
  }

  &:last-child {
    border-bottom: 1px solid ${({ theme }) => theme.colors.green.dark};
    border-bottom-left-radius: ${theme.round[1]};
    border-bottom-right-radius: ${theme.round[1]};
  }

  @media ${device.tablet} {
    width: 90%;
    margin: 0 auto;
  }
  @media ${device.mobile} {
    width: 100%;
  }
`;

export const Title = styled.div`
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.green.main};
  }
`;

export const Content = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Year = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: flex-end;
  font-weight: 200;
`;

export const Counter = styled.span`
  margin-right: ${theme.spacing[1]};
  &::after {
    content: ".";
  }
`;
