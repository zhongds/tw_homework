const tool = {}

tool.siblings = (target) => {
    const a = []
    const p = target.parentNode.children
    for (let i=0; i<p.length; i++) {
        let el = p[i]
        if (el !== target) a.push(el)
    }
    return a
}
tool.removeActiveClass = (arr) => {
    for (let i=0; i<arr.length; i++) {
        let el = arr[i]
        el.classList.remove('active')
    }
}

export default tool
