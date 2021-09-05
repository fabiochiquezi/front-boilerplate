import React from 'react'
import styled from 'styled-components'
import Logo1 from '../../../components/logo/logo1'
import Social1 from '../../../components/socialMedia/social1'

const Section = styled.section`
    padding-top: 48px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1024px){
        flex-direction: row;
    }

    a{
        order: 3;
    }

    .copy{
        margin-bottom: 32px;
        margin-top: 32px;
        order: 2;

        @media (min-width: 1024px){
            margin: 0px;
        }
    }

    @media (min-width: 1024px){
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

`

const Footer2: React.FC = ({ ...props }) => {
  return (
    <Section {...props}>
        <Logo1 size={0.6} />

        <p className="copy">© 2021 Moonex. All Rights Reserved.</p>

        <Social1
            style={1}
            facebook="https://pt-br.facebook.com/"
            instagram="https://www.instagram.com/"
            linkedin="https://br.linkedin.com/"
            youtube="https://www.youtube.com/"
            size={28}
        />
    </Section>
  )
}

export default Footer2
