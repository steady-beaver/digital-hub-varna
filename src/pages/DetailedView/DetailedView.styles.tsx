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

export const Title = styled.div`
  font-size: 3em;
  font-weight: 400;
  color: ${theme.colors.green.dark};
  text-align: center;
`;

export const Authors = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
`;
export const Publisher = styled.div``;
export const Year = styled.div``;
export const Tags = styled.div``;
export const Except = styled.div``;

export const FavoriteIconWrapper = styled.div`
  cursor: pointer;
  fill: ${theme.colors.green.dark};
  display: flex;
`;
