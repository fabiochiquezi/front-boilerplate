import React from 'react'
import { structureData } from '../../../../content/structureData'
import { Section } from './styles'

const Footer1: React.FC = ({ ...props }) => {
    return (
        <Section {...props}>
            <div className="pt pt-1">
                <h4>Boost Your Business Up To High Level Start by <span>Saying Hi!</span></h4>
            </div>

            <div className="pt pt-2">
                <h6>Links</h6>
                <ul>
                    <li><a href="">FAQS</a></li>
                    <li><a href="">TERM & CONDITIONS</a></li>
                    <li><a href="">PRIVACY POLICY</a></li>
                    <li><a href="">HELP</a></li>
                    <li><a href="">AFFILIATE</a></li>
                    <li><a href="">SERVICES</a></li>
                </ul>
            </div>

            <div className="pt pt-3">
                <h6>Contact</h6>
                <p>{structureData.general.addressSimple}</p>
                <p>{structureData.general.email}</p>
                <ul>
                    <li><a href="">WORKS</a></li>
                    <li><a href="">ABOUT</a></li>
                    <li><a href="">NEWS</a></li>
                    <li><a href="">CONTACT</a></li>
                </ul>
            </div>
        </Section>
    )
}

export default Footer1
