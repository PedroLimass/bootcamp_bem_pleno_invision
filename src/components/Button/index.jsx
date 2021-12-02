import React from 'react'
import * as S from './styles'

const Button = ({valueText, typeBtn, setStyles, src}) => {
    return (
        <S.Button type={typeBtn} setStyles={setStyles}>
            {src ? <img src={src} alt="Logo Google"/> : null}
            {valueText}
        </S.Button>
            
        
    )
}

export default Button
