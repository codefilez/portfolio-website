import { CenteredDiv } from "../../styling/CenteredDiv";
import { StyledH1 } from "../../styling/StyledH1";

const LawnPage = () => {
  return (
    <CenteredDiv>
      <StyledH1>My Lawn</StyledH1>
      <p style={{ color: `white` }}>
        Check out my lawn below! I will keep this page updated as the lawn grows
        in.
      </p>
      <img
        src="https://images.run3wide.com/v2/lawn_start.jpg"
        height={`500px`}
      />
    </CenteredDiv>
  );
};

export default LawnPage;
