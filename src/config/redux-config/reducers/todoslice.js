import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoslice = createSlice({
  name: "Todos",
  initialState: {
    todos: [
     
    ],
    edit: "",
  },
  reducers: {
    addtodo: (state, action) => {
      state.todos.push({
        title: action.payload.title,
        id: nanoid(),
      });
    },
    removetodo: (state, action) => {
      state.todos.splice(action.payload.index, 1);
    },
    edittodo: (state, action) => {
      const editvalue = prompt("edit todo");
      
      state.edit = editvalue;
      if(state.edit){
        state.todos[action.payload.index].title = state.edit;
      }
      state.edit = "";
    },
  },
});
console.log();
export const { addtodo, removetodo, edittodo } = todoslice.actions;
export default todoslice.reducer;
