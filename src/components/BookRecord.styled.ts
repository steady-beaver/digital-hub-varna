import styled from "styled-components";
import { theme } from "theme";

export const Frame = styled.div`
  border: 1px solid red;
  border-top: none;
  min-height: 100px;
  padding: 10px;

  &:first-child {
    border-top: 1px solid red;
  }
`;

export const Counter = styled.span`
  margin-right: ${theme.spacing(2)};
`;
