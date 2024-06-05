import { createSlice } from "@reduxjs/toolkit";

const loadInitialState = () => {
    const todosFromStorage = localStorage.getItem('todos');
    return {
        todos: todosFromStorage ? JSON.parse(todosFromStorage) : [],
        loading: false
    };
};

const initialState = loadInitialState();

const todoSlice = createSlice({
    name: 'todoslice',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        completed: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
                localStorage.setItem('todos', JSON.stringify(state.todos));
            }
        }
    }
})

export default todoSlice.reducer
export const {addTodo, deleteTodo, completed} = todoSlice.actions
