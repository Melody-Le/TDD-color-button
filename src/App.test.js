import { render, screen, fireEvent } from "@testing-library/react";
import { logRoles } from "@testing-library/dom";
import App from "./App";

test("button has correct initial color and update when click", () => {
  // render(<App />);
  // const linkElement = screen.getByRole("link", { name: "learn react" });
  // expect(linkElement).toBeInTheDocument();
  // // throw new Error("test failed");
  // const { container } = render(<App />);
  // logRoles(container);
  render(<App />);
  // find an element with a role of button and text of "Change to blue"
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: "red" });
  // clicked button
  fireEvent.click(colorButton);
  // expect the background color to be blue
  expect(colorButton).toHaveStyle({ backgroundColor: "blue" });
  expect(colorButton).toHaveTextContent("Change to red");
});
// test("button turns blue when clicked", () => {
//   render(<App />);
//   const colorButton = screen.getByRole("button", { name: "Change to blue" });
// });
