import style from './style.css'
import main from './scss/main.scss'
import { HelloWorld } from './components/App'
import Header from './components/Header'
import showMenu from './togglet-menu'


app.appendChild(Header)
//app.appendChild(Menu)
showMenu('menu-toggle', 'Navmenu')
