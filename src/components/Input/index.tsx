import { theme } from '@styles/theme'
import { useState } from 'react';
import styled from 'styled-components'

interface IInput {
    value: string,
    onChange: (value:string)=> void,

    onSubmit?: ()=> void,
    onBlur?: ()=> void
}

const InputText = styled.input`
    display: inline-block;
    text-align: center;
    width: 100%;
    height: 35.5px;
    border: 0.8px solid ${theme.colors.primary_20};
    font-size: ${theme.fontSizes.sm};
    border-radius: 2px;
    box-shadow: inset 0px 0px 2px 0.5px ${theme.colors.primary_10};
    outline: none;

    &:focus {
        border: 1px solid ${theme.colors.primary_50};
        box-shadow: none;
    }
`

export default function Input(input:IInput) {

    return (
        <InputText name="TodoText" type='text' autoFocus value={input.value} onChange={(e)=> input.onChange(e.target.value)}
            onBlur={()=>{ input.onBlur?.();}} onKeyDown={(e)=> {if(e.key==='Enter') { input.onSubmit?.();}}}
        />
    )
}