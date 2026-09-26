import { styled } from "@mui/system";

export const StyledBooksGrid = styled(`div`)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
`;

export const StyledP = styled(`p`)(({ theme }) => ({
  color: theme.palette.text.primary,
}));
