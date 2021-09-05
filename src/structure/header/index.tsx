import Link from 'next/link'
import { useRouter } from 'next/router'
import { Header as Div } from './styles'
import Logo1 from '../../components/logo/logo1'
import React, { useContext, useEffect } from 'react'
import { GeneralContext } from '../../context/general'
import Social1 from '../../components/socialMedia/social1'
import { structureData } from '../../../content/structureData'

export const Header: React.FC = ({ ...props }) => {
    const router = useRouter()
    const { menuProvider, menuStyleProvider } = useContext(GeneralContext)
    console.log(structureData)

    function toggleMenu(e: React.MouseEvent) {
        e.preventDefault()
        menuProvider.setMenu(!menuProvider.menu)
    }

    function handleOverflow() {
        const isMenuOpen = menuProvider.menu
        const html = document.getElementsByTagName('html')[0]
        const matchMedia = window.matchMedia('(max-width: 1024px)').matches

        if (!matchMedia) {
            html.style.overflowY = 'scroll'
            return
        }

        if (isMenuOpen && matchMedia) {
            html.style.overflowY = 'hidden'
            return
        }

        html.style.overflowY = 'scroll'
    }

    useEffect(() => {
        handleOverflow()
        window.addEventListener('resize', handleOverflow, false)
    }, [menuProvider.menu])

    return (
        <Div
            {...props}
            menu={menuProvider.menu}
            menuStyle={menuStyleProvider.menuStyle}
        >
            <div
                className="container"
            >
                <Logo1 size={0.75} />

                <nav>
                    <a href="#" className="icon-menu" onClick={toggleMenu}>
                        <img src="./icons/menu.svg" alt="Logo" />
                    </a>

                    <ul className="menu">
                        {structureData.menu.map((el, index) => (
                            <li key={index}>
                                <Link href={el.link}>
                                    <a className={router.pathname === el.link ? 'active' : ''}>{el.name}</a>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <Social1
                        style={1}
                        facebook={structureData.socialMedia.facebook}
                        instagram={structureData.socialMedia.instagram}
                        linkedin={structureData.socialMedia.linkedin}
                        youtube={structureData.socialMedia.youtube}
                        size={28}
                    />
                </nav>
            </div>
        </Div>
    )
}
