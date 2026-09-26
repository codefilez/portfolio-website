import { Link, NavLink } from "react-router-dom";
import { styled } from "@mui/system";
import { AppBar } from "@mui/material";

export const StyledAppBar = styled(AppBar)`
  background-color: rgba(10, 14, 26, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(148, 163, 184, 0.12);
  box-shadow: none;
`;

export const StyledLogo = styled(Link)`
  text-decoration: none;
  color: #e6edf3;
  font-weight: 800;
  font-size: 1.15rem;
  letter-spacing: -0.02em;
`;

export const StyledNavLinks = styled(`div`)`
  display: flex;
  gap: 1.75rem;

  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

export const StyledLinkV2 = styled(NavLink)`
  text-decoration: none;
  color: #94a3b8;
  font-size: 0.95rem;
  font-weight: 600;
  transition: color 0.15s ease;

  &:hover {
    color: #e6edf3;
  }

  &.active {
    color: #ffffff;
  }
`;
