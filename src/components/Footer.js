import { d } from '../helpers/helpers'

const Footer = d.createElement('footer'),
    FooterContainer = d.createElement('div'),
    Copy = d.createElement('p'),
    Iconos = d.createElement('i'),
    TextCopy = d.createElement('span')
Footer.classList.add('Footer')
Footer.classList.add('Layout-footer')
FooterContainer.classList.add('Footer-container')
FooterContainer.classList.add('Layout-container')
Copy.classList.add('Copy-right')
Iconos.classList.add('far')
Iconos.classList.add('fa-copyright')
TextCopy.textContent = ' localhos:8080. 2018' 
Copy.appendChild(Iconos)
Copy.appendChild(TextCopy)
FooterContainer.appendChild(Copy)
Footer.appendChild(FooterContainer)
export default Footer