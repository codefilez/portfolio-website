import { CenteredDiv } from "../../styling/CenteredDiv";
import { StyledH1 } from "../../styling/StyledH1";
import { StyledP } from "./styles";

export const BooksPage = () => {
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
        <StyledP key={bookName}>{bookName}</StyledP>
      ))}
    </CenteredDiv>
  );
};
