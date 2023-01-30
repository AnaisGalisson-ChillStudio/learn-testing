import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "taskSlice",
  initialState: {
    taskList: [{ id: 0, text: "Add new tasks", isDone: false }],
    tasktitle: "TITLE TASK",
  },
  reducers: {
    addTask: (currentSlice, action) => {
      currentSlice.taskList.push(action.payload);
    },
    updateTask: (currentSlice, action) => {
      currentSlice.taskList = action.payload;
    },
  },
});

export { taskSlice };

export const { addTask, updateTask } = taskSlice.actions;
