import { ReactComponent as IconSearch } from "assets/search.svg";
import styled from "styled-components";

export const SearchContainer = styled.div`
  position: relative;
  color: ${({ theme }) => theme.colors.green.dark};
`;

export const StyledSearch = styled.input`
  padding: 6px 10px 6px 34px;
  border: 1px solid ${({ theme }) => theme.colors.green.dark};
  border-radius: 25px;
  height: 34px;
  width: 220px;
  color: ${({ theme }) => theme.colors.green.main};

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline-offset: 2px;
    outline: 2px solid ${({ theme }) => theme.colors.green.main};
  }

  // remove the reset x icon in the end
  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    display: none;
  }

  &::-ms-clear {
    display: none;
    width: 0;
    height: 0;
  }

  &::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
  }
`;

export const StyledIconSearch = styled(IconSearch)`
  position: absolute;
  width: 16px;
  height: 16px;
  fill: currentColor;
  top: 50%;
  transform: translateY(-50%);
  left: 10px;
`;

export const IconWrapper = styled.label`
  cursor: pointer;
`;
