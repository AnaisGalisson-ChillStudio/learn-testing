import style from "./input-search.module.css";
import { InputGroup, Form, Button } from "react-bootstrap";
import { useState } from "react";

function InputSearch({ onSubmit, taskListLenght }) {
  const [task, setTask] = useState("");

  const onNewTaskSubmit = (event) => {
    event.preventDefault();
    if (task !== "") {
      onSubmit({ id: taskListLenght, text: task, isDone: false });
      setTask("");
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
