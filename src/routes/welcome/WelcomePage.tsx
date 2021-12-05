import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { StyledH1 } from "../../styling/StyledH1";

const StyledWelcomePage = styled.div({
  minHeight: `100vh`,
  textAlign: `center`,
  margin: `auto`,
  justifyContent: `center`,
  flexDirection: `column`,
  display: `flex`,
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
