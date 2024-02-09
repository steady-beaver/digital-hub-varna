import styled from "styled-components";
import { theme } from "theme";

export const Frame = styled.div`
  border-radius: ${theme.spacing[1]};
  border: 1px solid ${theme.colors.green.dark};
  padding: ${theme.spacing[2]};

  &:hover {
    cursor: pointer;
    border-color: ${theme.colors.green.main};
    color: ${theme.colors.green.main};
    box-shadow: 0 0 1px ${theme.colors.green.main};
  }
`;

export const Tags = styled.div`
  margin-top: ${theme.spacing[3]};
  white-space: nowrap; /* Prevents the text from wrapping */
  overflow: hidden; /* Hides any content that overflows its container */
  text-overflow: ellipsis;
`;
