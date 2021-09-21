import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { colors } from '../../styles/colors'

type styleCss ={
    style: number
}

const Div = styled.div<styleCss>`
    transition: all .900ms ease;

    &:hover{
        img{
            filter: grayscale(0);
            transform: scale(1.1);
        }

        h4, h5{
            color: ${colors.color1};
        }
    }

    a{
        display: flex;
        flex-direction: column;
    }

    .wrap-img{
        margin-bottom: 30px;
        overflow: hidden;
    }

    h5{
        font-size: 16px;
        text-transform: uppercase;
        color: ${colors.black1};
        transition: all .300ms ease;
        order: ${props => props.style === 1 ? '1' : '2'};

        @media (min-width: 768px){
            font-size: 14px;
        }

        @media (min-width: 768px){
            font-size: 16px;
        }
    }

    h4{
        font-size: 30px;
        font-weight: bold;
        color: ${colors.black1};
        margin-bottom: 0px;
        transition: all .3s ease;
        order: ${props => props.style === 1 ? '2' : '1'};

        @media (min-width: 768px){
            font-size: 24px;
        }

        @media (min-width: 1024px){
            font-size: 30px;
        }
    }

    img{
        filter: grayscale(100%);
        transition: all .900s ease;
    }
`

type props = {
    image: string
    subtitle: string,
    title: string,
    style?: number,
    link: string
}

const Thumb2: React.FC<props> = ({ image, subtitle, title, style = 1, link, ...props }) => (
    <Div style={style} {...props}>
        <Link href={link}>
        <a>
            <div className="wrap-img">
                <img src={image} alt={title} />
            </div>

            <h5>{subtitle}</h5>
            <h4>{title}</h4>
        </a>
        </Link>
    </Div>
)

export default Thumb2
