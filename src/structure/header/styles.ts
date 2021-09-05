import { colors } from '../../styles/colors'
import styled from 'styled-components'

type props = {
    menu: boolean,
    menuStyle: number
}

export const Header = styled.header<props>`
    z-index: 100;
    background-color: ${props => props.menuStyle === 1 ? colors.color2 : '#fff'};
    overflow-y: ${props => props.menu ? 'scroll' : 'auto'};

    @media (max-width: 1024px){
        width: ${props => props.menu ? '100%' : 'auto'};
        height: ${props => props.menu ? '100%' : 'auto'};
        position: ${props => props.menu ? 'fixed' : 'relative'};
    }

    @media (min-width: 1061px){
        overflow-y: auto;
    }

    .container{
        display: flex;
        padding-top: 36px;
        padding-bottom: 36px;
        align-items: center;
        justify-content: space-between;
    }

    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;

        @media (min-width: 1024px){
            width: 78%;
            position: relative;
            /* margin-top: -4px; */
        }
    }

    .menu{
        display: ${props => props.menu ? 'block' : 'none'};
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100vh;
        padding-top: 125px;

        @media (min-width: 1024px){
            display: flex !important;
            padding-top: 0px;
            position: static;
            height: auto;
        }

        a{
            width: 100%;
            font-size: 28px;
            padding: 20px 0px;
            text-align: center;
            display: inline-block;
            text-transform: uppercase;

            @media (min-width: 1024px){
                padding: 0px !important;
                font-size: 16px;
                font-weight: bold;
            }

            &:hover{
                color:  ${props => props.menuStyle === 1 ? colors.white1 : colors.color1};
            }
        }


        li + li{
            border-top: 1px solid ${colors.black1};

            @media (min-width: 1024px){
                border: none;
                margin-left: 38px;
            }
        }

        .active{
            color:  ${props => props.menuStyle === 1 ? colors.white1 : colors.color1};
            font-weight: bold;
            position: relative;

            @media (min-width: 1024px){
                &::after{
                    content: '';
                    display: inline-block;
                    width: 5px;
                    height: 5px;
                    border-radius: 50%;
                    background-color:  ${props => props.menuStyle === 1 ? colors.white1 : colors.color1};
                    position: absolute;
                    left: 50%;
                    margin-left: -2.5px;
                    top: 31px
                }
            }
        }
    }

    .icon-menu{
        position: relative;
        z-index: 100;

        @media (min-width: 1024px){
            display: none;
        }
    }

    ul:last-child{
        display: none;

        @media(min-width: 1024px){
            display: flex;
        }
    }
`
