import style from "./statistics.module.css";
import { useEffect } from "react";

export function Statistics({ taskList }) {
  useEffect(() => {
    getPercentage();
  }, [taskList]);

  // Return the percentage done of all tasks in the list
  const getPercentage = () => {
    const doneTaskList = taskList.filter((task) => task.isDone);

    const percentageTaskDone =
      (parseInt(doneTaskList.length) * 100) / parseInt(taskList.length);

    return percentageTaskDone.toFixed(2);
  };

  return (
    <div className={style.container}>Pourcentage done: {getPercentage()}%</div>
  );
}
