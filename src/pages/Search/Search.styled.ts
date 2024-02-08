import styled from "styled-components";
import { theme } from "theme";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing[4]};
  padding: ${theme.spacing[5]};
`;
