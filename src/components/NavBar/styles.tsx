import { Link } from "react-router-dom";
import { styled } from "@mui/system";
import { AppBar } from "@mui/material";

export const StyledLinkV2 = styled(Link)`
  text-decoration: none;
  color: white;
  background-color: transparent;
  font-size: 25px;
`;

export const StyledAppBar = styled(AppBar)`
  box-shadow: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
  position: static;
  background-color: transparent;
`;
