import './styles/main.css'
import './styles/common.css'

import eventFunction from './js/eventFunction'

//click tab page
const el = document.getElementsByClassName("tabs")[0]
el.addEventListener("click", eventFunction.tabPageClick, false)

//show resources popover
const resourceElList = document.getElementsByClassName('add-resources')
for (let i =0; i< resourceElList.length; i++) {
    let resourceEl = resourceElList[i]
    resourceEl.addEventListener('click', eventFunction.popoverClick, false)
}

//close popover
const closeEl = document.getElementById('close')
closeEl.addEventListener("click", eventFunction.popoverClose, false)

//save resources
const saveEl = document.getElementById('save')
const inputEl = document.querySelector('#popover>input')
saveEl.addEventListener("click", eventFunction.saveResources, false)
inputEl.addEventListener("keypress", e => {
    if(e.keyCode === 13) {
        eventFunction.saveResources()
    }
}, false)
