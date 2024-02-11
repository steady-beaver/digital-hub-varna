import styled from "styled-components";
import { theme } from "styles";
import device from "styles/mediaQueries";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing[4]};
  padding: ${theme.spacing[5]};

  @media ${device.mobile} {
    padding: ${theme.spacing[4]} ${theme.spacing[3]};
  }
`;
