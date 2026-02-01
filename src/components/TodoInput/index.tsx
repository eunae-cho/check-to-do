import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "store/todo/todoSlice";
import styled from "styled-components"

const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 3.5rem;
    background-color: '#453241';
`
const Input = styled.input`
    display: inline-block;
    text-align: center;
    width: 80%;
    height: 3rem;
    border: none;
    border-radius: 10px;
`
const Button = styled.button`
    display: inline-block;
    margin-left: 10px;
    width: 5rem;
    height: 3rem;
    border: none;
    border-radius: 10px;
    background-color: white;
    
    &:hover {
        border: 1px solid black;
    }
`

export default function TodoInput() {
    const [content, setContent] = useState('');
    const dispatch = useDispatch();

    // 버튼 클릭했을 경우, submit해주는 함수 (enter키도 같이 적용할 수 있도록) ::EA
    function clickSubmit() {
        if(content!=='') {
            dispatch(addTodo(content))

            setContent('');
        } else {
            //모달로 바꿔보기 ::EA
            alert('할 일을 입력하세요');
        }
    }

    return (
        <InputContainer>
            <Input id="input-text" type="text"  placeholder="할 일을 입력해주세요"  value={content} 
                    onChange={(e) => setContent(e.target.value)}
                    onKeyUp={(e)=> { 
                        if(e.key==='Enter') clickSubmit();
                    }}
                    ></Input>
            <Button onClick={()=> clickSubmit()}>등록</Button>
        </InputContainer>
    )
}