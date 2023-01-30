import "./App.css";
import { Header } from "./component/Header/Header";
import { InputSearch } from "./component/InputSearch/InputSearch";
import { TaskList } from "./component/TaskList/TaskList";
import { Statistics } from "./component/Statistics/Statistics";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateTask } from "./store/task-slice";

function App() {
  const storeTaskList = useSelector((store) => store.TASK.taskList);
  const dispatch = useDispatch();

  // Update the status isDone of the task clicked
  const updateTaskList = (task) => {
    const taskL = [...storeTaskList];
    const index = taskL.findIndex((currentTask) => currentTask.id === task.id);
    taskL[index] = { ...task, isDone: !task.isDone };

    dispatch(updateTask(taskL));
  };

  return (
    <div className="App">
      <div className="container">
        <Header />
        <InputSearch
          onSubmit={(task) => {
            updateTask([storeTaskList, ...storeTaskList]);
          }}
          taskListLenght={storeTaskList.length}
        />
        <TaskList taskList={storeTaskList} onTaskClick={updateTaskList} />
        <Statistics taskList={storeTaskList} />
      </div>
    </div>
  );
}

export default App;
