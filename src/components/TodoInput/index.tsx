import { theme } from "@styles/theme";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "store/todo/todoSlice";
import styled from "styled-components"
import Input from "@components/Input";

const InputForm = styled.form`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0px 15px;
    width: 100%;
    height: 44.5px;
`
// export const Input = styled.input`
//     display: inline-block;
//     text-align: center;
//     width: 100%;
//     height: 35.5px;
//     border: 0.8px solid ${theme.colors.primary_20};
//     font-size: ${theme.fontSizes.sm};
//     border-radius: 2px;
//     box-shadow: inset 0px 0px 2px 0.5px ${theme.colors.primary_10};
//     outline: none;

//     &:focus {
//         border: 1px solid ${theme.colors.primary_50};
//         box-shadow: none;
//     }

const Button = styled.button`
    display: inline-block;
    margin-left: 10px;
    width: 51px;
    height: 35.5px;
    color: ${theme.colors.white};
    border-radius: 2px;
    border: 0.8px solid ${theme.colors.primary_20};
    background-color: ${theme.colors.primary_40};
    font-size: ${theme.fontSizes.sm};
    font-family: 'Pretendard-Light';

    &:hover {
        border: 0.8px solid ${theme.colors.primary};
        background-color: ${theme.colors.primary_80};
    }
`

export default function TodoInput() {
    const [content, setContent] = useState('');
    const dispatch = useDispatch();

    // 버튼 클릭했을 경우, submit해주는 함수 (enter키도 같이 적용할 수 있도록) ::EA
    function clickSubmit(e: any) {
        if(!content.trim()) {
            alert('할 일을 입력해 주세요');
            return ;
        }
        dispatch(addTodo(content))
        setContent('');
    }

    return (
            <InputForm onSubmit={(e)=> { e.preventDefault(); clickSubmit(e);}}>
                <Input value={content} onChange={setContent} />
                <Button type="submit">등록</Button>
            </InputForm>
    )
}