import React from 'react'
import Divider1 from '../components/dividers/divider1'
import Footer from './footer'
import { Header } from './header'

const StructurePage: React.FC = ({ children }) => {
  return (
      <>
        <Header />
        <Divider1 />
            {children}
        <Footer />
      </>
  )
}

export default StructurePage
