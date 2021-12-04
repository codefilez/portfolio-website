import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders first book", () => {
  render(<App />);
  const linkElement = screen.getByText("Domain Driven Design by Eric Evans");
  expect(linkElement).toBeInTheDocument();
});
