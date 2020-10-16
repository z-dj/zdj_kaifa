//创建对象
//1.通过构造(object)函数
let myObject = new Object();
myObject.name = 'zdj';
myObject.age = 20;
console.log(myObject);
//2.通过对象字面量创建对象
//第一种方法
const oStudent = {};
oStudent .name = 'zd';
oStudent.age = 19;
//第二种方法
const oStudent1 = {
    name: 'zd',
    age: 19,
};
console.log(oStudent1.name);

console.log(typeof oStudent1);  //输出object

//array(数组)
const a1 = new Array();

const a2 = [];
console.log(typeof a2);  //输出object
console.log(a2[0]);   //声明了变量，但没赋值，输出undefined

const a2 = [];
a2[0] = 'a';
a2[1] = 6;
a2[5] = 'ture';

console.log(typeof a2); 
console.log(a2 instanceof Array); 

const a3 = [1,2,3,'abc',ture,undefined,null,a2,oStudent]   

//删除数组元素
const avengers = ['美国队长','雷神','绿巨人','黑寡妇'];
delete avengers[2];
console.log(avengers); 

//解构数组
//麻烦的
const number1 = [1,2,3,4];
let a = number1[0];
let b = number1[1];
let c = number1[2];
let d = number1[3];
console.log(`a=${a},b=${b},c=${c}`);
//简便的
const [a,b,c,d] = [1,2,3,4];
console.log(`a=${a},b=${b},c=${c}`);

const [a,b] = ['z',ture,1,2,2,1];
console.log(`a=${a},b=${b}`);

const avengers = ['美国队长','雷神','绿巨人','黑寡妇'];
console.log(avengers.length);
avengers.length = 1;
console.log(avengers);
avengers.length = 0;
console.log(avengers);
//pop删除元素是删除最后一个
const avengers = ['美国队长','雷神','绿巨人','黑寡妇'];
avengers.pop();
console.log(avengers);
//push添加到最后一个
avengers.push('zeng');
console.log(avengers);

const avengers = ['美国队长','雷神','绿巨人','黑寡妇'];
//shift删除第一个
console.log(avengers.shift());
console.log(avengers);

const avengers = ['美国队长','雷神','绿巨人','黑寡妇'];
//unshift添加到第一个
avengers.unshift('zeng');
console.log(avengers);

const avengers = ['美国队长','雷神','绿巨人','黑寡妇'];
const heroes = ['蝙蝠侠','神奇女侠','闪电侠','水行侠'];
const ah = avengers.const(heroes);
console.log(avengers,heroes,ah);

//扩展运算符
const avengers = ['美国队长','雷神','绿巨人','黑寡妇'];
const heroes = ['蝙蝠侠','神奇女侠','闪电侠','水行侠'];
const ah = [...avengers,...heroes];
console.log(ah);

const avengers = ['美国队长','雷神','绿巨人','黑寡妇'];
const av1 = avengers.join();
const av2 = avengers.join('&')
console.log(av1);
console.log(av2);

//slice切片
const avengers = ['美国队长','雷神','绿巨人','黑寡妇'];
const av3 = avengers.slice(1,3);
console.log(avengers);
console.log(av3);

//splice切片且的是中间
const avengers = ['美国队长','雷神','绿巨人','黑寡妇'];
const av4 = avengers.splice(1,2);
console.log(av4);
console.log(avengers);

//方法1
const number1 = [1,2,23,];
const a = number.sort();
console.log(number1);
console.log(a);
//方法2
const str = ['a','b','c','d'];
str.reverse();
console.log(str);

const avengers = ['美国队长','雷神','绿巨人','黑寡妇'];
const a = avengers.indexOf('美国队长');
console.log(a);

const avengers = ['美国队长','雷神','绿巨人','黑寡妇'];
const b = avengers.includes("美国队长");
console.log(b);

//多维数组
const ma = [[1,2],[3,4]];
console.log(ma);
console.log(ma[0][0]);
console.log(ma[0][1]);

//嵌套数组
const summer = ['Jun','Jul','Agu'];
const winter = ['Dec','Jan','Feb'];
const nested = [ summer,winter ];

const flat = [...summer,...winter]
console.log(flat);

//集合set
const oSet = new Set();
oSet.add(1);
oSet.add(2);
oSet.add(3).add(4).add(5)
oSet.add(5);
console.log(oSet);

const list1 = new Set([1,2,3,4,5,6]);
console.log(list1);

const list2 = new Set('Hello');
console.log(list2);

const list4 = new Set().add('the').add('quick').add('brown').add('fox');
console.log(list4.size);

list4.size = 2;
console.log(list4);

const list5 = new Set().add('the').add('quick').add('brown').add('fox');
a = list5.has('brown');
console.log(a);

const list5 = new Set().add('the').add('quick').add('brown').add('fox');
const b = list5.delete('fox');
console.log(b);
console.log(list5);

list5.clear();

console.log(list5);

const list6= new Set().add('the').add('quick').add('brown').add('fox');
const a = Array.from(list6);
console.log(a);

const list6 = new Set().add('the').add('quick').add('brown').add('fox');
const a = [...list6];
console.log(a);

const oArray1 = [1,2,12,1,2,3,4,4,4,5];
//先变集合
const oSet1 = new Set(oArray1);
console.log(oSet1);
//然后变数组
const oArray2 = [...oSet1];
console.log(oArray2); 


//weakset
let student = {
    name: 'zeng',
    age:25
};

const strong = new Set();
strong.add(student);
student = null;
console.log(strong.has(student));
console.log([...strong][0]);


//内存泄漏

let student = {
    name: 'zeng',
    age:25
};
const weak = new WeakSet();
//weak.add(1);
Weak.add(student);
student = null;  //如果没加student = null，那么输出ture,加了就输出false
console.log(weak.has(student));

//Map
const oMap = new Map();
oMap.set(1,'I');
oMap.set(2,'II').set(3,'III').set(4,'IV').set(5,'V').set('a','V');
console.log(oMap);
console.log(oMap.size);
const a = oMap.get(5);
console.log(a);
oMap.set('name','zengdongjiao');
const b = oMap.get('name');
console.log(oMap);
console.log(b);
console.log(oMap.has('name'));
const c = oMap.delete('name');
console.log(c);
oMap.clear();
console.log(oMap);

//Map转换成数组
const oMap = new Map().set(1,'I').set(2,'II').set(3,'III').set(4,'IV').set(5,'V').set('a','V');
const oArray = [...oMap];
console.log(oArray);

const oMap = new Map().set(1,'I').set(2,'II').set(3,'III').set(4,'IV').set(5,'V').set('a','V');
const oArray = Array.from(oMap);
console.log(oArray);