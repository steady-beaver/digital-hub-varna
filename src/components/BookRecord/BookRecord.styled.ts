import styled from "styled-components";
import { theme } from "theme";

export const Frame = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.green.dark};
  border-top: none;
  min-height: 100px;
  padding: 10px;
  max-width: 700px;
  display: flex;
  font-weight: 300;

  &:first-child {
    border-top: 1px solid ${({ theme }) => theme.colors.green.dark};
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
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
