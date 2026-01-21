import { Helmet } from "react-helmet-async";
import styled from "styled-components";

import TodoItem from "@components/TodoItem"
import TodoInput from "@components/TodoInput";


const Title = styled.h1`
margin: 0;
`

function HomePage() {
    return (
        <>
            <Helmet>
                <title>CHECK LIST</title>
            </Helmet>
            <Title>할 일</Title>
            <TodoInput />
            <TodoItem todo={{id:'1', completed:true, content:'투두리스트입니다', editing: false}}/>
        </>
        )
}

export default HomePage;