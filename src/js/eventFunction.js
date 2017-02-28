import tool from './tool'

function tabPageClick(e) {
    if (e.target.name === 'tab-agents') {
        e.target.parentNode.classList.add('active')
        tool.removeActiveClass(tool.siblings(e.target.parentNode))
        const targetPanel = document.getElementById('agents')
        targetPanel.classList.add('active')
        tool.removeActiveClass(tool.siblings(targetPanel))
    } else {
        alert(`${e.target.innerHTML} page is developing!`)
    }
}

function popoverClick(e) {
    const targetEl = e.target
    const popoverElStyle = document.getElementById('popover').style
    const height = targetEl.offsetTop + targetEl.clientHeight + 21
    const strCss = `top:${height}px; display: block`
    popoverElStyle.cssText += strCss
    const resourceElList = document.getElementsByClassName('add-resources')
    tool.removeActiveClass(resourceElList)
    targetEl.classList.add('active')
}

function popoverClose(e) {
    const popoverElStyle = document.getElementById('popover').style
    popoverElStyle.cssText += 'display: none'
    document.querySelector('.add-resources.active').classList.remove('active')
}

function saveResources(e) {
    const inputEL = document.querySelector('#popover>input')
    const arr = inputEL.value.split(',')
    const resourcesEL = document.querySelector('.add-resources.active').parentNode.querySelector('.resources')

    for (let i=0; i<arr.length; i++) {
        let text = arr[i]
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
    const popoverEl = document.getElementById('popover')
    popoverEl.style.cssText += 'display: none'
    popoverEl.getElementsByTagName('input')[0].value = ''
}

export default {
    tabPageClick,
    popoverClick,
    popoverClose,
    saveResources
}
