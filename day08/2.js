const oList = document.querySelector('#list1')  //ul

//ul的第一个元素子节点
const oli = oList.firstElementChild.nextElementSibling
//oli.style.cssText = 'border:1px solid red'
//background-color=>  backgroundColor
//float =>cssFloat
oli.style.backgroundColor = 'red'
oli.style.border = '4px solid blue'

const comStyle = window.getComputedStyle(oli)
console.log(comStyle)
console.log(comStyle.blorder)