import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { TodoState } from "./type";

//초기값
export const initialState:TodoState = [];

// Reducer, Slice
const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        addTodo(state, action: PayloadAction<string>)  {
                state.push({
                    id: nanoid(),
                    content: action.payload,
                    completed: false,
                    editing: false
                })
            
            console.log(state);
        },
        checkTodo(state, action: PayloadAction<string>) {
            const id = action.payload;
            state.find((item)=> {
                if(item.id===id)
                    item.completed = !item.completed;
            });
        },
        deleteTodo(state, action: PayloadAction<string>) {
            const id = action.payload;
            
            return state.filter((item)=> item.id!==id );
        },
        editTodo(state, action: PayloadAction<string>) {
            const id = action.payload;
            state.find((item)=> {
                if(item.id===id) 
                    item.editing = true });
        },
        modiTodo(state, action: PayloadAction<{id:string, content:string}>) {
            const id = action.payload.id;
            
            state.find((item)=> {
                if(item.id===id) {
                    item.content = action.payload.content;
                    item.editing = false;
                }
            })
            console.log("modi");
        }
    }    
});

export const { addTodo, checkTodo, deleteTodo, editTodo, modiTodo } = todoSlice.actions;
export default todoSlice.reducer;