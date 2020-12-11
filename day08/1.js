const oList = document.querySelector('#list1')
const oliElement = document.createElement('li')

oliElement.textContent = 'swift'
// const oTextNode = document.createTextNode('swift')
// oliElement.appendChild(oTextNode)
// oliElement.textContent = 'swift'
// oList.append(oliElement)

//oList.prepend()

//插入第二个子节点
//oList.firstElementChild.after(oliElement)

//插入成倒数第二个子节点
//oList.lastElementChild.before(oliElement)

//oList.lastElementChild.remove()

//替换JavaScript节点
//oList.lastElementChild.previousElementSibling.replaceWith(oliElement)



//操作css
oList.lastElementChild.classList.add('list1')
oList.lastElementChild.previousElementSibling.classList.add('list')

oList.firstElementChild.classList.add('list1')

oList.addEventListener('mouseover',(event) =>{
    event.target.classList.togg
})
