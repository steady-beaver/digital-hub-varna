import styled from "styled-components";
import { theme } from "styles";

export const StyledNav = styled.nav`
  margin-left: ${theme.spacing[4]};
  display: flex;
`;

export const StyledLi = styled.li`
  display: inline-block;
  font-size: 18px;
  font-weight: 700;
  text-decoration: none;
  padding: 0 ${theme.spacing[2]};

  a {
    text-decoration: none;
    color: ${theme.colors.green.dark};
  }
  a.active {
    text-decoration: underline;
    color: ${theme.colors.common.black};
  }
`;
