import { Helmet } from "react-helmet-async";
import styled from "styled-components";

import TodoItem from "@components/TodoItem"
import TodoInput from "@components/TodoInput";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/store";

const PageWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    `

const HomeContainer = styled.div`
    margin: 0;
    padding: 10px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 430px;
    width: 60vw;
    height: 90vh;
    border-radius: 20px;
    background-color:rgb(171, 232, 253);
`
const Title = styled.h1`
    margin: 15px;
`
const TodoList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    padding: 10px 15px;
    margin-top: 10px;
    // background-color: gray;
    border-radius: 10px;
`

function HomePage() {
    const todoList = useSelector((state:RootState)=>{ 
        return state.todo;
        });

    return (
        <PageWrapper>
            <HomeContainer>
                <Helmet>
                    <title>CHECK-TO-DO</title>
                </Helmet>
                <Title>Todo List</Title>
                <TodoInput/>
                <TodoList id="todo-list-section">
                    {todoList.map((item, index)=> {
                        return (
                            <TodoItem key={index} todoItem={{ id:item.id, content: item.content, completed: item.completed, editing: item.editing }}/>
                        )
                    })}
                </TodoList>
            </HomeContainer>
        </PageWrapper>
        )
}

export default HomePage;