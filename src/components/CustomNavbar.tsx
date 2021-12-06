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
          gridTemplateColumns: `repeat(3,1fr)`,
          textAlign: `center`,
          position: `static`,
        }}
      >
        <StyledLink to={`/books`} displayText={`Books`} />
        <StyledLink to={`/`} displayText={`Home`} />
        <StyledLink to={`/blog`} displayText={`Blog`} />
      </AppBar>
      <Toolbar />
    </div>
  );
};

export default CustomNavbar;
