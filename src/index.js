import style from './style.css'
import main from './scss/main.scss'
import { HelloWorld } from './components/App'
import Header from './components/Header'
import showMenu from './togglet-menu'
import Main from './components/Body'
import Footer from './components/Footer'


app.appendChild(Header)
//app.appendChild(Menu)
showMenu('menu-toggle', 'Navmenu')
app.appendChild(Main)
app.appendChild(Footer)
