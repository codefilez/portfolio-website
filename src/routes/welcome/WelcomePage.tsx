import { Link } from "react-router-dom";
import { StyledH1 } from "../../styling/StyledH1";
import { CenteredDiv } from "../../styling/CenteredDiv";

const WelcomePage = function app() {
  return (
    <CenteredDiv>
      <StyledH1>Welcome to run3wide.com!</StyledH1>
      <Link to="/books">Books</Link>
      <Link to="/blog">Blog</Link>
    </CenteredDiv>
  );
};

export default WelcomePage;
