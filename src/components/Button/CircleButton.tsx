import styled from "styled-components"

const Circle = styled.div`
    display:none;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    
    &:hover {
        //휴지통 hover시 어떤 변화를 통해 표시할 것인지?
    }
`

export default function CircleButton({ className, buttonClick, iconSrc }:{
    className?: string,
    buttonClick: ()=> void,
    iconSrc?: string
}) {
        return(
            <Circle className={className} onClick={buttonClick} >
                <img src={iconSrc}/>
            </Circle>
        )
    }