import './styles/main.css'
import './styles/common.css'

import tool from './tool'

//click tab page
const el = document.getElementsByClassName("tabs")[0]
el.addEventListener("click", e => {
    if (e.target.hash === '#agents') {
        e.target.parentNode.classList.add('active')
        tool.removeActiveClass(tool.siblings(e.target.parentNode))
        const targetId = e.target.getAttribute('href')
        const targetPanel = document.querySelector(targetId)
        targetPanel.classList.add('active')
        tool.removeActiveClass(tool.siblings(targetPanel))
    } else {
        alert(`${e.target.innerHTML} page is developing!`)
    }
}, false)

//show resources popover
const resourceElList = document.getElementsByClassName('add-resources')
for (let resourceEl of resourceElList) {
    resourceEl.addEventListener('click', e => {
        const popoverElStyle = document.getElementById('popover').style
        const height = resourceEl.offsetTop + resourceEl.clientHeight + 21
        const strCss = `top:${height}px; display: block`
        popoverElStyle.cssText += strCss
        tool.removeActiveClass(resourceElList)
        resourceEl.classList.add('active')
    }, false)
}

//close popover
const closeEl = document.getElementById('close')
closeEl.addEventListener("click", e => {
    const popoverElStyle = document.getElementById('popover').style
    popoverElStyle.cssText += 'display: none'
    document.querySelector('.add-resources.active').classList.remove('active')
}, false)

//save resources
const saveEl = document.getElementById('save')
saveEl.addEventListener("click", e => {
    const inputEL = document.querySelector('#popover>input')
    const arr = inputEL.value.split(',')
    const resourcesEL = document.querySelector('.add-resources.active').parentNode.lastChild

    for (let text of arr) {
        const node = document.createElement("li")
        const textNode = document.createTextNode(text.trim())
        const closeIcon = document.createElement("span")
        node.appendChild(textNode)
        node.appendChild(closeIcon)
        closeIcon.addEventListener('click', e => {
            e.target.parentNode.parentNode.removeChild(e.target.parentNode)
        }, false)
        resourcesEL.appendChild(node)
    }
    const popoverEl = saveEl.parentNode.parentNode
    popoverEl.style.cssText += 'display: none'
    popoverEl.getElementsByTagName('input')[0].value = ''
}, false)


module.hot.accept()