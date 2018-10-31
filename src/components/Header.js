import Logo from './Logo'
import NavMenu from './Menu'

const d = document,
    Header = d.createElement('header'),
    HeaderContainer = d.createElement('div'),
    MenuToggle = d.createElement('div')
Header.classList.add('Header')
HeaderContainer.classList.add('Header-container')
HeaderContainer.classList.add('Layout-container')
MenuToggle.classList.add('Menu-toggle')
MenuToggle.id = 'menu-toggle'
HeaderContainer.appendChild(Logo)
HeaderContainer.appendChild(MenuToggle)
HeaderContainer.appendChild(NavMenu)
Header.appendChild(HeaderContainer)

export default Header