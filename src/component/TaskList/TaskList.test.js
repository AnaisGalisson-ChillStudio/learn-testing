import { TaskList } from "./TaskList";
import { render, screen } from "@testing-library/react";

test("If no task done, display <Check /> component", () => {
  render(
    <TaskList taskList={[{ id: 0, text: "Add new tasks", isDone: false }]} />
  );
  const taskList = screen.getByRole("contentinfo");
  const circleComponent = screen.getByTestId("circle");

  expect(taskList).toContainElement(circleComponent);
});

test("If one task is done, display <CheckCircleFill /> component", () => {
  render(
    <TaskList taskList={[{ id: 0, text: "Add new tasks", isDone: true }]} />
  );
  const taskList = screen.getByRole("contentinfo");
  const circleFullComponent = screen.getByTestId("check-circle");

  expect(taskList).toContainElement(circleFullComponent);
});
