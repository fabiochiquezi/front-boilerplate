import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    background-color: #F5F5F5;
    width: 240px;
    height: 220px;
    padding: 16px;
    padding-bottom: 24px;

    @media (min-width: 1024px){
        width: 200px;
        height: 200px;
    }

    &:hover{
        img{
            filter: grayscale(0);
        }
    }

    .wrap-img{
        margin-bottom: 20px;
    }

    img{
        transition: all .3s ease;
        width: 85px;
        filter: grayscale(100%);

        @media(min-width: 1024px){
            width: 65px;
        }

    }

    h5{
        padding-top: 16px;
        font-size: 16px;

        @media (min-width: 1024px){
            font-size: 12px;
        }

        @media (min-width: 1280px){
            font-size: 15px;
        }
    }
`

type props = {
    image: string,
    title: string
}

const Box1: React.FC<props> = ({ image, title, ...props }) => (
    <Div {...props}>
        <div className="wrap-img">
            <img src={image} alt="" />
        </div>

        <h5>{title}</h5>
    </Div>
)

export default Box1
