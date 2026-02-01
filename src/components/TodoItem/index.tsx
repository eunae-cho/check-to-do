import CircleButton from "@components/Button/CircleButton"
import Checkbox from "@components/Checkbox"
import { useDispatch } from "react-redux"
import { checkTodo, deleteTodo } from "store/todo/todoSlice"
import styled from "styled-components"

const ItemContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 15px;
    font-size: 16.8px;
    border-bottom: 1px solid #7a7a7a;

    &:hover {
        &> .delete-button {
        display: flex;
        }
    }
`

const TodoContent = styled.span<{ checked?: boolean }>`
    display: inline-block;
    padding-left: 0px 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${props => (props.checked ? '#eee' : '#121212') };
    word-wrap: break-word;
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
            <div>
                <Checkbox checked={todoItem.completed} onCheck={ ()=>onCheckClick(todoItem.id) }/>
                <TodoContent checked={todoItem.completed}>{todoItem.content}</TodoContent>
            </div>

            <CircleButton className="delete-button" buttonClick={ ()=> onDeleteClick(todoItem.id) } iconSrc={process.env.PUBLIC_URL+ '/asset/icon-delete.svg'}/>                        
        </ItemContainer>
    )
}