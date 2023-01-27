import { render, screen } from "@testing-library/react";
import { logRoles } from "@testing-library/dom";
import App from "./App";

test("button has correct initial color", () => {
  // render(<App />);
  // const linkElement = screen.getByRole("link", { name: "learn react" });
  // expect(linkElement).toBeInTheDocument();
  // // throw new Error("test failed");
  const { container } = render(<App />);
  logRoles(container);
  // find an element with a role of button and text of "Change to blue"
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });
});
test("button has correct initial text", () => {});
test("button turns blue when clicked", () => {});
