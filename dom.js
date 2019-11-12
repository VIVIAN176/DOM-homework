window.dom = {
    find(selector, scope) {
        return (scope || document).querySelectorAll(selector)
    },
    style(node, name, value) {
        if (arguments.length === 3) {
            //dom.style(div,'color','red')
            node.style[name] = value
        } else if (arguments.length === 2) {
            if (typeof name === 'string') {
                return node.style[name]
            } else if (name instanceof Object) {
                //dom.style(div,{'color':'red'})
                const object = name
                for (let key in object) {
                    // key: border/color
                    //node.style.border
                    //node.style.color
                    //key是个变量 如果用.key .key直接就变成字符串了
                    node.style[key] = object[key]
                }
            }
        }
    },
    each(nodeList, fn) {
        for (let i = 0; i < nodeList.length; i++) {
            fn.call(null, nodeList[i])

        }
    }
}