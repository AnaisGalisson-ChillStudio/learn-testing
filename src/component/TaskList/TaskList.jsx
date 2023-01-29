import { CheckCircleFill, Circle } from "react-bootstrap-icons";
import ListGroup from "react-bootstrap/ListGroup";
import style from "./task-list.module.css";

export function TaskList({ taskList, onTaskClick }) {
  const renderTask = (task) => {
    return (
      <ListGroup.Item
        key={task.id}
        className={style.item_container}
        onClick={() => onTaskClick(task)}
      >
        <div className={task.isDone ? style.text_task_done : undefined}>
          {task.text}
        </div>
        {task.isDone ? (
          <CheckCircleFill width="20" height="20" />
        ) : (
          <Circle width="20" height="20" />
        )}
      </ListGroup.Item>
    );
  };

  return <ListGroup>{taskList.map((task) => renderTask(task))}</ListGroup>;
}
