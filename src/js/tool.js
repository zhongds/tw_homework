const tool = {}

tool.siblings = (target) => {
    const a = []
    const p = target.parentNode.children
    for (let el of p) {
        if (el !== target) a.push(el)
    }
    return a
}
tool.removeActiveClass = (arr) => {
    for (let el of arr) {
        el.classList.remove('active')
    }
}

export default tool