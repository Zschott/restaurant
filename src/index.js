import './styles.css'
import {populateHome} from './home'
import {populateMenu} from './menu'
import {populateAbout} from './about'

const homeBtn = document.getElementById("homeBtn")
const menuBtn = document.getElementById('menuBtn')
const aboutBtn = document.getElementById('aboutBtn')

function clear(){
    let content = document.getElementById('content')
    content.textContent = ""
}

function homePush(){
    clear()
    populateHome()
}

function menuPush(){
    clear()
    populateMenu()
}

function aboutPush(){
    clear()
    populateAbout()
}

homePush()

homeBtn.addEventListener('click', homePush)
menuBtn.addEventListener('click', menuPush)
aboutBtn.addEventListener('click', aboutPush)
