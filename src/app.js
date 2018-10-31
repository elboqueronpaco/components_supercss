import style from './style.css'
import main from './scss/main.scss'
import logo from './img/logo-DPscss.svg'
import data from './data.json'
import React from 'react'
import ReactDOM from 'react-dom'
import { HelloWorld } from './components/App.jsx'

ReactDOM.render(
    <HelloWorld name="React" logo={logo} menu={data.links} />,
    document.getElementById('app')
)