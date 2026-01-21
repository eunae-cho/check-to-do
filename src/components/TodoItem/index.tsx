import Checkbox from "@components/Checkbox"
import styled from "styled-components"

const Box = styled.div`
    display: flex;
    align-items: center;
    padding: 15px 25px;
    width: 100%;
    font-size: 1.2em;
    border-bottom: 1px solid #eee;
`

const TodoContent = styled.span<{ checked?: boolean }>`
    overflow: hidden;
    text-overflow: ellipsis;
    padding-left: 5px;
    color: ${props => (props.checked ? '#eee' : '#121212') };
    word-wrap: break-word;
    text-decoration: ${props => (props.checked ? 'line-through' : 'initial') }; 
`

export default function TodoItem({todo}: {todo: ITodoItem}) {
    return(
        <Box>
            <Checkbox checked={todo.completed}/>
            <TodoContent checked={todo.completed}>{todo.content}</TodoContent>
        </Box>
    )
}