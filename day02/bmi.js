//(1)用变量储存Mark和John的体重和身高
let M_heigh = 1.70,M_mass = 45;  
let J_heigh = 1.65,J_mass = 55;
//(2)计算两人的BMI
let M_BIM = M_mass / (M_heigh * M_heigh);
let J_BIM = J_mass / (J_heigh * J_heigh);
console.log("Mark的BIM值为：",M_BIM);
console.log("John的BIM值为：",J_BIM);
//(3)创建一个布尔变量，用来包含Mark的BMI是否比John更高(三目运算符)
//声明变量
let compare;
//比较大小
compare = (M_BIM > J_BIM) ? true : false;
console.log(compare);
//(4)打印一个字符串到控制台，包含第三步的变量（比如"Mark的BMI是否比John更高？true"）
console.log("Mark的BMI是否比John更高？",String(compare));
