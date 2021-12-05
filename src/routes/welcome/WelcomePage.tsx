import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { StyledH1 } from "../../styling/StyledH1";

const StyledWelcomePage = styled.div({
  display: `flex`,
  flexDirection: `column`,
  alignItems: `center`,
  margin: `auto`,
});

const WelcomePage = function app() {
  return (
    <StyledWelcomePage>
      <StyledH1>Welcome to run3wide.com!</StyledH1>
      <Link to="/books">Books</Link>
      <Link to="/blog">Blog</Link>
    </StyledWelcomePage>
  );
};

export default WelcomePage;
