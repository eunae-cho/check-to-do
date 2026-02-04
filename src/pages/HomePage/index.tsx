import { Helmet } from "react-helmet-async";
import styled from "styled-components";
import {theme} from "@styles/theme"

import TodoItem from "@components/TodoItem"
import TodoInput from "@components/TodoInput";
import { useSelector } from "react-redux";
import { RootState } from "store/store";


const PageWrapper = styled.div`
    width: 400px;
    height: 480px;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const HomeContainer = styled.div`
    margin: 0;
    padding: 25px 25px;
    width: 400px;
    height: 480px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 400px;
    background: ${theme.colors.background_gradient};
`
const LogoImage = styled.div`
    width: 100%;
    height: 125px;
    align-content: center;
    text-align: center;

    & >img {
        height: 53.88px;
    }
`
const TodoList = styled.div`
    margin: 15px;
    display: flex;  
    flex-direction: column;
    width: 335px;
    max-height: 245px;
    overflow-y: auto;
`

function HomePage() {
    const todoList = useSelector((state:RootState)=>{ 
        return state.todo;
        });

    return (
        //<PageWrapper>
            <HomeContainer>
                <Helmet>
                    <title>STICKY DO</title>
                </Helmet>
                <LogoImage>
                    <img src={process.env.PUBLIC_URL+ '/asset/STICKYDO.svg'}/>
                </LogoImage>
                <TodoInput/>
                <TodoList id="todo-list-section">
                    {todoList.map((item, index)=> {
                        return (
                            <TodoItem key={index} todoItem={{ id:item.id, content: item.content, completed: item.completed, editing: item.editing }}/>
                        )
                    })}
                </TodoList>
            </HomeContainer>
        //</PageWrapper>
        )
}

export default HomePage;