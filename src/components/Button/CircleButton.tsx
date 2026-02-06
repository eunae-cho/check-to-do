import { theme } from "@styles/theme"
import styled from "styled-components"

const Circle = styled.div`
    display:none;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    
    &:hover {
       filter: drop-shadow(0.5px 0.5px 4px ${theme.colors.primary_50});
    }

    & >img {
        width: 80%;
        height: 80%;
    }
`

export default function CircleButton({ className, buttonClick, iconSrc }:{
    className?: string,
    buttonClick: ()=> void,
    iconSrc?: string
}) {
        return(
            <Circle className={className} onClick={buttonClick} >
                <img src={iconSrc} alt={"deleteIcon"}/>
            </Circle>
        )
    }