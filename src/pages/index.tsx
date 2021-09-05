import React, { useContext } from 'react'
import Head from 'next/head'
import type { NextPage } from 'next'
import styled from 'styled-components'
import StructurePage from '../structure'
import { homeData } from '../../content/homeData'
import { GeneralContext } from '../context/general'

const H1 = styled.h1`
    font-size: 32px;
    color: red;
`

const Home: NextPage = () => {
    const { menuStyleProvider } = useContext(GeneralContext)
    menuStyleProvider.setMenuStyle(1)

    const {
        seo
    } = homeData

  return (
      <>
            <Head>
                <title>{seo.title}</title>
                <meta name="description" content={seo.description} />
            </Head>

            <StructurePage>
                <div className="container section-1">
                    <H1>Hello World!!!</H1>
                </div>
            </StructurePage>
        </>
  )
}

export default Home
