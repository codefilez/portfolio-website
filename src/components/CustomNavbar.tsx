import { AppBar, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

type LinkProps = {
  to: string;
  displayText: string;
};

const StyledLink = (props: LinkProps) => (
  <Link
    style={{
      textDecoration: `none`,
      color: `white`,
      fontSize: `1.5rem`,
      paddingTop: `1rem`,
    }}
    to={props.to}
  >
    {props.displayText}
  </Link>
);

const CustomNavbar = () => {
  return (
    <div>
      <AppBar
        style={{
          background: `none`,
          boxShadow: `none`,
          display: `grid`,
          gridTemplateColumns: `repeat(4,1fr)`,
          textAlign: `center`,
          position: `static`,
        }}
      >
        <StyledLink to={`/`} displayText={`Home`} />
        <StyledLink to={`/books`} displayText={`Books`} />
        <StyledLink to={`/blog`} displayText={`Blog`} />
        <StyledLink to={`/lawn`} displayText={`Lawn`} />
      </AppBar>
      <Toolbar />
    </div>
  );
};

export default CustomNavbar;
