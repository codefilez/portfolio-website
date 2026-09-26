import { Toolbar } from "@mui/material";
import { StyledAppBar, StyledLinkV2, StyledLogo, StyledNavLinks } from "./styles";

const links = [
  { to: `/`, label: `Home` },
  { to: `/books`, label: `Books` },
  { to: `/blog`, label: `Blog` },
];

export const NavBar = () => (
  <StyledAppBar position="sticky" elevation={0}>
    <Toolbar sx={{ display: `flex`, justifyContent: `space-between` }}>
      <StyledLogo to={`/`}>run3wide</StyledLogo>
      <StyledNavLinks>
        {links.map((link) => (
          <StyledLinkV2 key={link.to} to={link.to} end={link.to === `/`}>
            {link.label}
          </StyledLinkV2>
        ))}
      </StyledNavLinks>
    </Toolbar>
  </StyledAppBar>
);
