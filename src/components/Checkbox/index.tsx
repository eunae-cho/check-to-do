import styled from "styled-components";
import { theme } from "@styles/theme";

const Circle = styled.div<{ checked?: boolean; }>`  
    display: inline-block;
    width: 19.5px;
    height: 19.5px;
    border-radius: 50%;
    border: 0.8px solid ${props => props.checked ?  theme.colors.primary : theme.colors.primary };
    margin: 0px 10px;

    & > .checkbox-icon {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: ${theme.colors.primary};
    }
`

export default function Checkbox({ checked, onCheck }:{ checked?: boolean; onCheck?: ()=>void }) {
    return (
        <>
            <Circle checked={checked} onClick={onCheck}>
                {checked? <div className="checkbox-icon"/> : null}
            </Circle>
        </>
    )
}