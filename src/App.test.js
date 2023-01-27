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
});

test("initial condition", () => {
  render(<App />);
  // check that the button starts out enabled
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});
test("Checkbox disables button on first click and enables on second click", () => {
  render(<App />);
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const button = screen.getByRole("button", { name: "Change to blue" });

  fireEvent.click(checkbox);
  expect(button).toBeDisabled();
  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
});
// My work => Not correct
// test("Button turn gray when diabled checkbox", () => {
//   render(<App />);
//   const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
//   const button = screen.getByRole("button", { name: "Change to blue" });

//   fireEvent.click(checkbox);
//   expect(button).toBeDisabled();
//   expect(button).toHaveStyle({ backgroundColor: "gray" });
//   fireEvent.click(checkbox);
//   expect(button).toBeEnabled();
//   expect(button).toHaveStyle({ backgroundColor: "red" });
//   expect(button).toHaveTextContent("Change to blue");
//   fireEvent.click(button);
//   // expect the background color to be blue
//   expect(button).toHaveStyle({ backgroundColor: "blue" });
//   expect(button).toHaveTextContent("Change to red");
// });
// Teacher code:
test("Disabled button has gray background and reverts to red", () => {
  render(<App />);
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const button = screen.getByRole("button", { name: "Change to blue" });

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: "gray" });

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: "red" });
});

test("Disabled button has gray background and reverts to Blue", () => {
  render(<App />);
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  const button = screen.getByRole("button", { name: "Change to blue" });
  // change button to blue
  fireEvent.click(button);
  // disable button
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: "gray" });

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: "blue" });
});
