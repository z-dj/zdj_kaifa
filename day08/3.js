const oButton1 = document.querySelector('#myButton1')
//第一种方法
// const callback = function(){
//     console.log('click')
// }

//oButton1.addEventListener('click',callback)

//第二种方法
const callback =()=>{
    console.log('click1')
}

const callback2 =()=>{
    console.log('click2')
}

oButton1.onclick = callback
oButton1.onclick = callback2
//去掉绑定
oButton1.onclick = null 

// oButton1.addEventListener('click', () =>{
//     console.log('click2')
// })
// oButton1.addEventListener('click', () =>{
//     console.log('click3')
// })
// oButton1.addEventListener('click', () =>{
//     console.log('click2')
// })

oButton1.addEventListener('click',callback)
oButton1.addEventListener('click',callback2)
