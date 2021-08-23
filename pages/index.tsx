import React from 'react'
import Head from 'next/head'
import type { NextPage } from 'next'
import styled from 'styled-components'

const H1 = styled.h1`
    font-size: 32px;
    color: red;
`

const Home: NextPage = () => {
  return (
      <>
        <Head>
            <title>Title | Home</title>
            <meta name="description" content="descriptio" />
        </Head>

        <div className="container">
            <H1>Hello World!!!</H1>
        </div>
    </>
  )
}

export default Home
