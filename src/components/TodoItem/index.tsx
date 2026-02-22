import CircleButton from "@components/Button/CircleButton"
import Checkbox from "@components/Checkbox"
import  Input  from "@components/Input"
import { theme } from "@styles/theme"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { checkTodo, deleteTodo, editTodo, modiTodo } from "store/todo/todoSlice"
import styled from "styled-components"

const ItemContainer = styled.div`
    margin: 0px 15px;
    display: flex;  
    justify-content: space-between;
    align-items: center;
    min-height: 45px;
    font-size: ${theme.fontSizes.md};
    border-bottom: 0.2px solid ${theme.colors.primary_20};
    &:last-child {
        border-bottom: none;
    }
    
    &:hover {
        &> .delete-button {
        display: flex;
        }
    }

    & >.left-container {
        width: 85%;
        display: flex;
        flex-direction: row;
        align-items:center;
        padding: 2px 0px;
    }
`

const TodoContent = styled.span<{ checked?: boolean }>`
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: pre-wrap;
    word-wrap: break-word;
    color: ${props => (props.checked ? theme.colors.gray : '#121212') };
    text-decoration: ${props => (props.checked ? 'line-through' : 'initial') }; 
`

export default function TodoItem({todoItem}:{todoItem: ITodoItem}) {
    const dispatch = useDispatch();
    const [editText, setEditText] = useState(todoItem.content);

    const onCheckClick = (id:string) => {
        dispatch(checkTodo(id));
    }

    const onDeleteClick = (id:string) => {
        dispatch(deleteTodo(id));
    }

    const onDoubleClick = (id:string) => {
        dispatch(editTodo(id));
    }

    const submitTodo = (id:string) => {
        dispatch(modiTodo({id:id, content:editText}))
    }
   
    return(
        <ItemContainer>
            <div className="left-container" onDoubleClick={()=> onDoubleClick(todoItem.id)}>
                <Checkbox checked={todoItem.completed} onCheck={ ()=>onCheckClick(todoItem.id) }/>
                    {(todoItem.editing)
                    ? <Input value={editText} onChange={setEditText} onSubmit={()=>submitTodo(todoItem.id)} onBlur={()=>submitTodo(todoItem.id)}/>
                    :<TodoContent checked={todoItem.completed} >{todoItem.content}</TodoContent>
                    }
            </div>

            <CircleButton className="delete-button" buttonClick={ ()=> onDeleteClick(todoItem.id) } iconSrc={process.env.PUBLIC_URL+ '/asset/icon-delete.svg'}/>                        
        </ItemContainer>
    )
}