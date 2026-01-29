import CircleButton from "@components/Button/CircleButton"
import Checkbox from "@components/Checkbox"
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

export default function TodoItem({todoItem}: {todoItem: ITodoItem}) {
    return(
        <ItemContainer>
            <div>
                <Checkbox checked={todoItem.completed}/>
                <TodoContent checked={todoItem.completed}>{todoItem.content}</TodoContent>
            </div>

            <CircleButton className="delete-button" buttonClick={()=> {}} iconSrc={process.env.PUBLIC_URL+ 'asset/icon-delete.svg'}/>                        
        </ItemContainer>
    )
}