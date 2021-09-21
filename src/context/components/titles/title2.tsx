import React from 'react'
import styled from 'styled-components'

const Title = styled.h2`
    font-size: 50px;
    font-weight: bold;
    line-height: 110%;
    margin-bottom: 0px;

    @media (min-width: 1024px){
        font-size: 80px;
    }
`

type props = {
    title: string,
    className?: string
}

const Title2: React.FC<props> = ({ title, className, ...props }) => (
   <Title className={className} {...props}>{title}</Title>
)

export default Title2
