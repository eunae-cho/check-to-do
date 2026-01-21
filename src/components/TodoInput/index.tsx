import styled from "styled-components"

const Input = styled.input`
    display: inline;
    text-align: center;
    width: 80%;
    height: 3rem;
    border: none;
`
const Button = styled.button`
    margin-left: 10px;
    width: 5rem;
    height: 3rem;
`

export default function TodoInput() {
    return (
        <>
            <Input placeholder="할 일을 입력해주세요"></Input>
            <Button>등록</Button>
        </>
    )
}