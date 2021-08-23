import { createGlobalStyle } from 'styled-components'
import { Variables } from './variables'
import { Structure } from './structure'
import { Reset } from './reset'

const GlobalStyle = createGlobalStyle`
    ${Variables}
    ${Reset}
    ${Structure}
`
export default GlobalStyle
