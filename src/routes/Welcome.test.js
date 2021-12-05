import { render, screen } from "@testing-library/react";
import Welcome from "./Welcome";

test(`renders welcome message`, () => {
  render(<Welcome />);
  const linkElement = screen.getByText(`Welcome to run3wide.com!`);
  expect(linkElement).toBeInTheDocument();
});
