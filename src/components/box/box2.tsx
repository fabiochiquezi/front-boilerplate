import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    &:hover{
        img{
            filter: grayscale(0);
        }
    }

    img{
        transition: all .3s ease;
        filter: grayscale(100%);
    }
`

type props = {
    image: string,
    title: string,
    className?: string
}

const Box2: React.FC<props> = ({ image, title, className, ...props }) => (
    <Div {...props} className={className + ' ' + 'flex flex-col items-center'}>
        <div className="bg-gray-200 flex flex-col items-center justify-center w-32 xl:w-40 pt-16 pb-10 rounded-full">
            <div className="wrap-img w-full flex flex-col items-center mb-6">
                <img src={image} alt="" className="w-auto" />
            </div>
            <p className="text-3xl lg:text-4xl font-serif">90%</p>
        </div>

        <h5 className="text-xl mt-4">{title}</h5>
    </Div>
)

export default Box2
