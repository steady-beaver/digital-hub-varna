import styled from "styled-components";
import { theme } from "theme";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${theme.spacing[4]};
  margin: ${theme.spacing[5]} auto;
  padding: ${theme.spacing[5]};
  border: ${theme.spacing[1]} solid ${theme.colors.green.dark};
  border-radius: ${theme.round[2]};
  max-width: 800px;
  font-weight: 300;
`;

export const FavoriteIconWrapper = styled.div`
  cursor: pointer;
  fill: ${theme.colors.green.dark};
  display: flex;
  justify-content: center;
  align-items: center;
  // border: 1px solid ${theme.colors.green.dark};
  border-radius: ${theme.round[5]};
  padding: ${theme.spacing[1]};

  &:hover {
    box-shadow: ${theme.shadow};
  }

  & > svg {
    position: relative;
    bottom: -2px;
    right: -1px;
  }
`;
