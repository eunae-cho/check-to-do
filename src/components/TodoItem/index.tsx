import CircleButton from "@components/Button/CircleButton"
import Checkbox from "@components/Checkbox"
import { theme } from "@styles/theme"
import { useDispatch } from "react-redux"
import { checkTodo, deleteTodo } from "store/todo/todoSlice"
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
        display: flex;
        flex-direction: rows;
        align-items:center;
    }
`

const TodoContent = styled.span<{ checked?: boolean }>`
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    color: ${props => (props.checked ? theme.colors.gray : '#121212') };
    text-decoration: ${props => (props.checked ? 'line-through' : 'initial') }; 
`

export default function TodoItem({todoItem}:{todoItem: ITodoItem}) {
    const dispatch = useDispatch();

    const onCheckClick = (id:string) => {
        dispatch(checkTodo(id));
    }

    const onDeleteClick = (id:string) => {
        dispatch(deleteTodo(id));
    }
   
    return(
        <ItemContainer>
            <div className="left-container">
                <Checkbox checked={todoItem.completed} onCheck={ ()=>onCheckClick(todoItem.id) }/>
                <TodoContent checked={todoItem.completed}>{todoItem.content}</TodoContent>
            </div>

            <CircleButton className="delete-button" buttonClick={ ()=> onDeleteClick(todoItem.id) } iconSrc={process.env.PUBLIC_URL+ '/asset/icon-delete.svg'}/>                        
        </ItemContainer>
    )
}