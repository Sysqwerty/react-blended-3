import { createSlice } from '@reduxjs/toolkit';

const toDoSlice = createSlice({
  name: 'toDo',
  initialState: {
    items: [],
  },
  reducers: {
    addToDo() {},
    deleteToDo() {},
  },
});

export const { addToDo, deleteToDo } = toDoSlice.actions;
export const toDoReducer = toDoSlice.reducer;
