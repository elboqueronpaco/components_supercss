import style from './style.css'
import main from './scss/main.scss'
import logo from './img/logo-DPscss.svg'
import data from './data.json'
import { HelloWorld } from './components/App'


const d = document,
    app = d.getElementById('app'),
    h1 = d.createElement('h1'),
    img = d.createElement('img'),
    p = d.createElement('p'),
    nav = d.createElement('nav'),
    hello = new HelloWorld('Vanilla JS')

let menu = ''
data.links.forEach(link => menu += `<a class="Menu-link" href="${link[1]}">${link[0]}</a>` );
h1.textContent = 'Webpack + Vanilla'
p.textContent = hello.greet()
img.src = logo
nav.classList.add('Menu')
nav.innerHTML = menu
app.appendChild(h1)
app.appendChild(p)
app.appendChild(nav)
app.appendChild(img)
