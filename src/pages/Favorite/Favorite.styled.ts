import styled from "styled-components";
import { theme } from "styles";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 1fr));
  gap: ${theme.spacing[3]};
`;
