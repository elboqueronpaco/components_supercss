import data from '../data.json'


let menu = ''
data.links.forEach(link => menu += `<li class="Menu-item"><a class="Menu-link" href="${link[1]}">${link[0]}</a></li>` );
const d = document,
 NavMenu = d.createElement('nav'),
 Menu = d.createElement('ul')
Menu.classList.add('Menu')
NavMenu.classList.add('Navmenu')
NavMenu.id = 'Navmenu'
Menu.innerHTML = menu

NavMenu.appendChild(Menu)

export default NavMenu