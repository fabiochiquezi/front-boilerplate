import React from 'react'
import styled from 'styled-components'

interface propsType {
    marginLeft?: number,
    size?: number
}

interface props extends propsType{
    style?: number,
    facebook?: string,
    instagram?: string,
    linkedin?: string,
    youtube?: string
}

const Ul = styled.ul<propsType>`
    display: flex;

    li + li{
        margin-left: ${props => props.marginLeft + 'px'};
    }

    li{
        transition: all .2s ease;

        &:hover{
            opacity: 0.5;
        }
    }

    img{
        width: ${props => props.size + 'px'};
    }
`

const Social1: React.FC<props> = ({ style, facebook, instagram, linkedin, youtube, marginLeft = 20, size = 24, ...props }) => (
    <Ul className="social-media" marginLeft={marginLeft} size={size} {...props}>
        {facebook &&
            <li>
                <a href={facebook} target="blank" rel="noopener noreferrer">
                    {style === 0 && <img src="./socialMedia/facebook.svg" alt="" />}
                    {style === 1 && <img src="./socialMedia/facebook-black.svg" alt="" />}
                    {style === 2 && <img src="./socialMedia/facebook-white.svg" alt="" />}
                </a>
            </li>
        }

        {instagram &&
            <li>
                <a href={instagram} target="blank" rel="noopener noreferrer">
                    {style === 0 && <img src="./socialMedia/instagram-black.svg" alt="" />}
                    {style === 1 && <img src="./socialMedia/instagram-black.svg" alt="" />}
                    {style === 2 && <img src="./socialMedia/instagram-white.svg" alt="" />}
                </a>
            </li>
        }

        {linkedin &&
            <li>
                <a href={linkedin} target="blank" rel="noopener noreferrer">
                    {style === 0 && <img src="./socialMedia/linkedin.svg" alt="" />}
                    {style === 1 && <img src="./socialMedia/linkedin-black.svg" alt="" />}
                    {style === 2 && <img src="./socialMedia/linkedin-white.svg" alt="" />}
                </a>
            </li>
        }

        {youtube &&
            <li>
                <a href={youtube} target="blank" rel="noopener noreferrer">
                    {style === 0 && <img src="./socialMedia/youtube.svg" alt="" />}
                    {style === 1 && <img src="./socialMedia/youtube-black.svg" alt="" />}
                    {style === 2 && <img src="./socialMedia/youtube-white.svg" alt="" />}
                </a>
            </li>
        }
    </Ul>
)

export default Social1
