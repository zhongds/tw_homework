function siblings(target) {
    const a = []
    const p = target.parentNode.children
    for (let el of p) {
        if (el !== target) a.push(el)
    }
    return a
}
function removeActiveClass(arr) {
    for (let el of arr) {
        el.classList.remove('active')
    }
}

export default {
    siblings,
    removeActiveClass
}