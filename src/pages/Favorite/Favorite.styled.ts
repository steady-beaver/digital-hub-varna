import styled from "styled-components";
import { theme } from "styles";
import device from "styles/mediaQueries";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(100px, 1fr));
  gap: ${theme.spacing[3]};

  @media ${device.tablet} {
    grid-template-columns: repeat(2, minmax(100px, 1fr));
  }

  @media ${device.mobile} {
    grid-template-columns: repeat(1, minmax(100px, 1fr));
  }
`;
