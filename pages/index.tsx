import React from 'react'
import type { NextPage } from 'next'
import styled from 'styled-components'

const H1 = styled.h1`
    font-size: 32px;
    color: red;
`

const Home: NextPage = () => {
  return (
    <div className="container">
        <H1>Hello World!!!</H1>
    </div>
  )
}

export default Home
