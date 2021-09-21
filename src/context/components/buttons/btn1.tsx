import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { colors } from '../../styles/colors'

const Btn = styled.a`
    color: ${colors.white1};
    background: ${colors.color2};
    width: 150px;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;

    @media (min-width: 1024px){
        width: 180px;
        height: 65px;
        font-size: 20px;
    }
`

type props = {
    text: string,
    link: string,
    btnDefault?: boolean,
    blank?: boolean
}

const Btn1: React.FC<props> = ({ text, link, btnDefault, blank, ...props }) => {
    const defaultComponent = (
        <Btn href={link} target={blank ? '_blank' : ''} rel="noreferrer" {...props}>
            {text}
        </Btn>
    )
    const nextComponent = <Link href={link}><Btn>{text}</Btn></Link>

    if (btnDefault) return defaultComponent
    if (!btnDefault) return nextComponent

    return null
}

export default Btn1
