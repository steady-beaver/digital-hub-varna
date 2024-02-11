import styled from "styled-components";
import { theme } from "styles";
import device from "styles/mediaQueries";

export const Frame = styled.div`
  height: 136px;
  border-bottom: ${theme.spacing[1]} solid ${theme.colors.green.dark};
  padding: 0 ${theme.spacing[5]};
  color: ${theme.colors.green.dark};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  gap: ${theme.spacing[5]};

  @media ${device.mobile} {
    padding: 0 ${theme.spacing[4]};
  }
`;

type StyledNavProps = {
  $isMobileMenuOpen?: boolean;
};

export const StyledNav = styled.nav<StyledNavProps>`
  margin-left: ${theme.spacing[4]};
  display: flex;
  z-index: 1;

  @media ${device.tablet} {
    display: ${({ $isMobileMenuOpen }) =>
      $isMobileMenuOpen ? "flex" : "none"};
    // display: none;
    // border: 1px solid red;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    margin-left: 0;

    & > ul {
      display: flex;
      flex-direction: column;
      width: 100%;
      text-align: center;

      & > li {
        background-color: ${theme.colors.common.white};
        padding: 0;

        &:last-child {
          border-bottom: ${theme.spacing[1]} solid ${theme.colors.green.dark};
        }

        & > a {
          // padding: 0 0;
          padding: ${theme.spacing[2]} 0;
          width: 100%;
          display: block;
          height: 100%;
        }
      }
    }
  }
`;

export const StyledLi = styled.li`
  display: inline-block;
  font-size: 18px;
  font-weight: 700;
  text-decoration: none;
  padding: 0 ${theme.spacing[2]};

  @media ${device.tablet} {
    // display: none;
    // border: 1px solid red;
  }

  a {
    text-decoration: none;
    color: ${theme.colors.green.dark};
  }
  a.active {
    text-decoration: underline;
    color: ${theme.colors.common.black};
  }
`;

export const MobileMenuIcon = styled.button`
  border: 1px solid ${theme.colors.green.dark};
  border-radius: 5px;
  fill: ${theme.colors.green.dark};
  background-color: ${theme.colors.common.white};
  display: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:active,
  &:focus {
    outline-offset: 2px;
    outline: 2px solid ${theme.colors.green.main};
  }

  @media ${device.tablet} {
    display: flex;
  }
`;
