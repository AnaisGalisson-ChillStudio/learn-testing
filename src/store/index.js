import { configureStore } from "@reduxjs/toolkit";
import { taskSlice } from "./task-slice";

const store = configureStore({
  reducer: {
    TASK: taskSlice.reducer,
  },
});
export { store };
