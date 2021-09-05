import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
        width: 100%;
        height: 1px;
        background: rgba(0,0,0,0.1);
        position: relative;
        margin-top: -2px;
        z-index: 100;
`

const Divider2: React.FC = ({ ...props }) => (
    <div className="container" {...props}>
        <Div className="border-divider"></Div>
    </div>
)

export default Divider2
