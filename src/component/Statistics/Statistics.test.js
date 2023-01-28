import { render, screen } from "@testing-library/react";
import { Statistics } from "./Statistics";

test("If no task done we should see 0.00%", () => {
  render(
    <Statistics taskList={[{ id: 0, text: "Add new tasks", isDone: false }]} />
  );
  const linkElement = screen.getByText(/Pourcentage done: 0.00%/i);
  expect(linkElement).toBeInTheDocument();
});

test("If one task oen two is done we should see 50.00%", () => {
  render(
    <Statistics
      taskList={[
        { id: 0, text: "Add new tasks", isDone: false },
        { id: 1, text: "Another Task", isDone: true },
      ]}
    />
  );
  const linkElement = screen.getByText(/Pourcentage done: 50.00%/i);
  expect(linkElement).toBeInTheDocument();
});
