import { MouseEvent } from "react";
import styled from "styled-components";

const Circle = styled.div<{ checked?: boolean; }>`  
    display: inline-block;
    width: 25px;
    height: 25px;
    border-radius: 20%;
    border: 2px solid ${props => props.checked ? 'background' : "#eee"};
    // padding: 3px;
    margin-right: 10px;

    & > .checkbox-icon {
    width: 100%;
    height: 100%;
    border-radius: 20%;
    background: background;
    }
`

// check 이벤트 핸들러 :: EA
function onCheck(e: MouseEvent<HTMLDivElement>) {
    console.log('체크박스 클릭!!', e);
}

export default function Checkbox({ checked, onCheck }:{ checked?: boolean; onCheck?: ()=>void }) {
    return (
        <>
            <Circle checked={checked} onClick={onCheck}>
                {checked? <div className="checkbox-icon"/> : null}
            </Circle>
        </>
    )
}