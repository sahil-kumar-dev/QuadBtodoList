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
            state.todos.push(action.payload)
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
        },
        completed: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload);
            console.log(action.payload)
            if (todo) {
                todo.completed ? todo.completed = false : todo.completed = true
            }
        }
    }
})

export default todoSlice.reducer
export const {addTodo,deleteTodo,completed} = todoSlice.actions