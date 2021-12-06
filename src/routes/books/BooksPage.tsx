import { CenteredDiv } from "../../styling/CenteredDiv";
import { StyledH1 } from "../../styling/StyledH1";

const BooksPage = () => {
  const bookStrings = [
    `Domain Driven Design by Eric Evans`,
    `The Software Architect Elevator by Gregor Hohpe`,
    `Building Microservices by Sam Newman`,
    `Patterns of Enterprise Application Architecture by Martin Fowler`,
    `Clean Craftsmanship by Robert Martin`,
  ];
  return (
    <CenteredDiv>
      <StyledH1>Recently Read Bookshelf</StyledH1>
      {bookStrings.map((bookName) => (
        <p key={bookName} style={{ color: `white` }}>
          {bookName}
        </p>
      ))}
    </CenteredDiv>
  );
};

export default BooksPage;
