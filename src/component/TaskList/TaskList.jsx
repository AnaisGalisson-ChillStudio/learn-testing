import { CheckCircleFill, Circle, Trash } from "react-bootstrap-icons";
import ListGroup from "react-bootstrap/ListGroup";
import style from "./task-list.module.css";

export function TaskList({ taskList, onTaskClick, deleteTask }) {
  const renderTask = (task) => {
    return (
      <ListGroup.Item key={task.id} className={style.item_container}>
        <div className={task.isDone ? style.text_task_done : undefined}>
          {task.text}
        </div>
        <div>
          {task.isDone ? (
            <CheckCircleFill
              width="20"
              height="20"
              onClick={() => onTaskClick(task)}
            />
          ) : (
            <Circle width="20" height="20" onClick={() => onTaskClick(task)} />
          )}
          <Trash
            style={{ paddingLeft: 5 }}
            width="25"
            height="25"
            onClick={() => deleteTask(task.id)}
          />
        </div>
      </ListGroup.Item>
    );
  };

  return <ListGroup>{taskList.map((task) => renderTask(task))}</ListGroup>;
}
