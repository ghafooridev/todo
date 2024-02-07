import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_TODO } from "@/lib/constants";

export const todoSlice = createSlice({
    name: "todo",
    initialState: { todo: [...DEFAULT_TODO], filtered: false } as TodoState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo: Todo = {
                id: Date.now(),
                title: action.payload.title,
                completed: false,
            }

            state.todo.push(newTodo);
        },

        deleteTodo: (state, action) => {
            return { ...state, todo: state.todo.filter((item: Todo) => item.id !== action.payload.id) }
        },

        completeTodo: (state, action) => {
            const updatedData = state.todo.map((item: Todo) => {
                if (item.id === action.payload.id) return { ...item, completed: !item.completed }
                return item
            })

            return { ...state, todo: updatedData }
        },

        deleteCompleted: (state) => {
            return { ...state, todo: state.todo.filter((item: Todo) => !item.completed) }
        },

        filterCompleted: (state, action) => {

            return { ...state, filtered: action.payload.filtered }

        },
    }
});

export const { addTodo, deleteTodo, completeTodo, deleteCompleted, filterCompleted } = todoSlice.actions;

export default todoSlice.reducer;