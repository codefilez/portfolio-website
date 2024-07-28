import { StyledAppBar, StyledLinkV2 } from "./styles";

export const NavBar = () => (
  <>
    <StyledAppBar>
      <StyledLinkV2 to={`/`}>Home</StyledLinkV2>
      <StyledLinkV2 to={`/books`}>Books</StyledLinkV2>
      <StyledLinkV2 to={`/blog`}>Blog</StyledLinkV2>
    </StyledAppBar>
  </>
);
