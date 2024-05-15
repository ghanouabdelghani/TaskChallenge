import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  task: [],
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask(state, action) {
      return [...state.task, action.payload];
    },
  },
});

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;
