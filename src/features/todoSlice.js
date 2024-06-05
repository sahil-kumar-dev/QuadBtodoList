import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
    loading: false
}

const todoSlice = createSlice({
    name: 'todoslice',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
        }
    }
})

export default todoSlice.reducer