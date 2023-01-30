import { useState } from "react";
import "./App.css";
import { Header } from "./component/Header/Header";
import { InputSearch } from "./component/InputSearch/InputSearch";
import { TaskList } from "./component/TaskList/TaskList";
import { Statistics } from "./component/Statistics/Statistics";
import { useSelector } from "react-redux";
function App() {
  const storeTaskList = useSelector((store) => store.TASK.taskList);

  console.log(storeTaskList);
  const [taskList, setTaskList] = useState([
    { id: 0, text: "Add new tasks", isDone: false },
  ]);

  // Update the status isDone of the task clicked
  const updateTaskList = (task) => {
    const taskL = [...taskList];
    const index = taskL.findIndex((currentTask) => currentTask.id === task.id);
    taskL[index] = { ...task, isDone: !task.isDone };

    setTaskList(taskL);
  };

  return (
    <div className="App">
      <div className="container">
        <Header />
        <InputSearch
          onSubmit={(task) => {
            setTaskList([storeTaskList, ...taskList]);
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
