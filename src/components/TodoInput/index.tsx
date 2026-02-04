import { theme } from "@styles/theme";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "store/todo/todoSlice";
import styled from "styled-components"

const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0px 15px;
    width: 100%;
    height: 44.5px;
`
const Input = styled.input`
    display: inline-block;
    text-align: center;
    width: 100%;
    height: 35.5px;
    border: 0.8px solid ${theme.colors.primary};
    border-radius: 2px;
`
const Button = styled.button`
    display: inline-block;
    margin-left: 10px;
    width: 50.5px;
    height: 35.5px;
    color: ${theme.colors.white};
    border-radius: 2px;
    border: 0.8px solid ${theme.colors.primary};
    background-color: ${theme.colors.primary_20};
    font-size: ${theme.fontSizes.tn};
    font-family: 'Pretendard-ExtraLight';

    &:hover {
        border: 0.8px solid ${theme.colors.primary};
        background-color: ${theme.colors.primary_50};
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