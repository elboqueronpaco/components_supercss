import { d, b } from './helpers/helpers'
const showMenu = (toggleId, navId) => {
    const toggle = d.getElementById(toggleId),
        nav = d.getElementById(navId)
    if(toggle && nav) {
        toggle.addEventListener('click', () =>{
            nav.classList.toggle('show')
        })
    }
}

export default showMenu
