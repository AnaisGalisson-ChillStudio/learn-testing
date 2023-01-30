import style from "./input-search.module.css";
import { InputGroup, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../store/task-slice";

function InputSearch({ onSubmit, taskListLenght }) {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const onNewTaskSubmit = (event) => {
    event.preventDefault();
    if (task !== "") {
      onSubmit({ id: taskListLenght, text: task, isDone: false });
      setTask("");
      dispatch(addTask({ id: taskListLenght, text: task, isDone: false }));
    }
  };

  return (
    <div className={style.container}>
      <Form onSubmit={onNewTaskSubmit}>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="New task"
            onChange={(event) => setTask(event.target.value)}
            value={task}
          />
          <Button
            disabled={task === ""}
            variant="outline-secondary"
            type="submit"
          >
            Add my task
          </Button>
        </InputGroup>
      </Form>
    </div>
  );
}

export { InputSearch };
