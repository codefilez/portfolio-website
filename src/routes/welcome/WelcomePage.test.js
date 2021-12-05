import { render, screen } from "@testing-library/react";
import WelcomePage from "./WelcomePage";

test(`renders welcome message`, () => {
  render(<WelcomePage />);
  const linkElement = screen.getByText(`Welcome to run3wide.com!`);
  expect(linkElement).toBeInTheDocument();
});
