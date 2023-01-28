import { render, screen } from "@testing-library/react";
import App from "./App";

test("Render the title correctly", () => {
  render(<App />);
  const linkElement = screen.getByText("TodoList");
  expect(linkElement).toBeInTheDocument();
});
