import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

type props = {
    size: number
}

const A = styled.a<props>`
    position: relative;
    z-index: 100;
    cursor: pointer;

    &:hover{
        opacity: 0.7;
    }

    img{
        width: ${props => props.size * 160 + 'px'};
    }
`

const Logo1: React.FC<props> = ({ size = 1, ...props }) => (
    <Link href="/">
        <A className="logo" size={size} {...props}>
            <img src="./logo/logo.png" alt="" />
        </A>
    </Link>
)

export default Logo1
