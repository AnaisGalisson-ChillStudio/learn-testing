import { render, screen, fireEvent } from "@testing-library/react";
import { InputSearch } from "./InputSearch";

test("The submit button should be disabled if no text in input", () => {
  render(<InputSearch />);
  const inputSearchInput = screen.getByRole("input");
  const inputSearchButton = screen.getByTestId("input-search-button");
  expect(inputSearchInput.value).toBe("");
  expect(inputSearchButton).toBeDisabled();
});

test("The submit button should be enbale if there is some text in the iunput", () => {
  render(<InputSearch />);
  const inputSearchInput = screen.getByTestId("input-search-input");
  const inputSearchButton = screen.getByTestId("input-search-button");

  fireEvent.change(inputSearchInput, { target: { value: "newTask" } });
  //fireEvent(inputSearchButton, new MouseEvent("click"));
  expect(inputSearchButton).toBeEnabled();
});
