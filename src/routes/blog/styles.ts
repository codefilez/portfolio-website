import { styled } from "@mui/system";
import { Typography } from "@mui/material";

export const StyledBlogPostCard = styled(`div`)({
  padding: `1rem`,
  width: `50%`,
  textAlign: `left`,
});

export const StyledBlogPostCards = styled(`div`)({
  display: `flex`,
  flexDirection: `column`,
  alignItems: `center`,
});

export const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

export const StyledTitleTypography = styled(StyledTypography)`
  font-weight: bold;
`;
