import "./App.css";
import { Header } from "./component/Header/Header";
import { InputSearch } from "./component/InputSearch/InputSearch";
import { TaskList } from "./component/TaskList/TaskList";
import { Statistics } from "./component/Statistics/Statistics";
import { useState } from "react";

function App() {
  const [taskList, setTaskList] = useState([
    { id: 0, text: "Add new tasks", isDone: false },
  ]);

  // Update the status isDone of the task clicked
  const updateTaskList = (task) => {
    const updatedTaskList = [...taskList];
    const index = taskList.findIndex(
      (currentTask) => currentTask.id === task.id
    );
    updatedTaskList[index] = { ...task, isDone: !task.isDone };
    setTaskList(updatedTaskList);
  };

  // Add a new task
  const addTask = (newTask) => {
    setTaskList([...taskList, newTask]);
  };

  // Delete a new task
  const deleteTask = (taskId) => {
    // TODO: delete a task
    console.log("qljhfisl");
    setTaskList([]);
  };

  return (
    <div className="App">
      <div className="container">
        <Header />
        <InputSearch taskListLenght={taskList.length} addTask={addTask} />
        <TaskList
          taskList={taskList}
          onTaskClick={updateTaskList}
          deleteTask={deleteTask}
        />
        <Statistics taskList={taskList} />
      </div>
    </div>
  );
}

export default App;
