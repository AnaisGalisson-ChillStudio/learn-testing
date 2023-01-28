import { useState } from "react";
import "./App.css";
import { Header } from "./component/Header/Header";
import { InputSearch } from "./component/InputSearch/InputSearch";
import { TaskList } from "./component/TaskList/TaskList";
import { Statistics } from "./component/Statistics/Statistics";
function App() {
  const [taskList, setTaskList] = useState([
    { id: 0, text: "Add new tasks", isDone: false },
  ]);

  return (
    <div className="App">
      <div className="container">
        <Header />
        <InputSearch
          onSubmit={(task) => {
            setTaskList([task, ...taskList]);
          }}
          taskListLenght={taskList.length}
        />
        <TaskList
          taskList={taskList}
          setTaskList={(updatedTaskList) => setTaskList(updatedTaskList)}
        />
        <Statistics taskList={taskList} />
      </div>
    </div>
  );
}

export default App;
