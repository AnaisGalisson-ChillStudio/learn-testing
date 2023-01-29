import { useContext, useState } from "react";
import "./App.css";
import { Header } from "./component/Header/Header";
import { InputSearch } from "./component/InputSearch/InputSearch";
import { TaskList } from "./component/TaskList/TaskList";
import { Statistics } from "./component/Statistics/Statistics";
import { Level1 } from "./component/Levels/Level1";
import { ThemeModeContext, THEME } from "./contexts/ThemeModeContext";
function App() {
  // THEME CONTEXT
  const initialThemeMode = useContext(ThemeModeContext);
  const [themeMode, setThemeMode] = useState(initialThemeMode);

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
    <ThemeModeContext.Provider value={{ themeMode, setThemeMode }}>
      <div
        className="App"
        style={{
          color: THEME[themeMode].textColor,
          backgroundColor: THEME[themeMode].backgroundColor,
        }}
      >
        <div className="container">
          <Header />
          <InputSearch
            onSubmit={(task) => {
              setTaskList([task, ...taskList]);
            }}
            taskListLenght={taskList.length}
          />
          <TaskList taskList={taskList} onTaskClick={updateTaskList} />
          <Statistics taskList={taskList} />
          <Level1 />
        </div>
      </div>
    </ThemeModeContext.Provider>
  );
}

export default App;
