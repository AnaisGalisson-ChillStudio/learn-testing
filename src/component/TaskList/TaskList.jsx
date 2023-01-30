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
          <CheckCircleFill data-testid="check-circle" width="20" height="20" />
        ) : (
          <Circle data-testid="circle" width="20" height="20" />
        )}
      </ListGroup.Item>
    );
  };

  return (
    <div role="contentinfo">
      <ListGroup>{taskList.map((task) => renderTask(task))}</ListGroup>;
    </div>
  );
}
