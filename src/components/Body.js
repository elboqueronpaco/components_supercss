import { d } from '../helpers/helpers'

const Main = d.createElement('main'),
    TitleMain = d.createElement('h1')
Main.classList.add('Main')
Main.classList.add('Layout-main')
TitleMain.classList.add('Main-title')
TitleMain.textContent = 'Main principal'
Main.appendChild(TitleMain)
export default Main