import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    a{
        transition: all .25s ease;
    }

    body::-webkit-scrollbar {
        width: 6px;
        border: none;
        outline: none;
    }
    body::-webkit-scrollbar-track {
        border: none;
        outline: none;
    }
    body::-webkit-scrollbar-thumb {
        background-color: #EA1C1D;
        border: none;
        outline: none;
    }

    body, html{
        overflow-x: hidden;
    }

    html, body{
        font-size: 16px;
    }

    h1 { font-size: 6em}
    h2 { font-size: 3em}
    h3 { font-size: 1.5em}
    h4 { font-size: 1.2em}
    h5 { font-size: 1.1em}
    h6 { font-size: 1.05em}
`
export default GlobalStyle
