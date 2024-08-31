import { createSlice, nanoid } from '@reduxjs/toolkit';

const toDoSlice = createSlice({
  name: 'toDo',
  initialState: {
    items: [],
  },
  reducers: {
    addToDo: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(text) {
        return {
          payload: { text, id: nanoid() },
        };
      },
    },
    deleteToDo: (state, action) => {
      state.items = state.items.filter(toDo => toDo.id !== action.payload);
    },
  },
});

export const { addToDo, deleteToDo } = toDoSlice.actions;
export const toDoReducer = toDoSlice.reducer;
