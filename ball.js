//(1). 计算每队的平均分；
let JohnAvg = (89,120,103)/3;
let MikeAvg = (116,94,123)/3;
console.log("John的平均分："+JohnAvg);
console.log("Mike的平均分："+MikeAvg);
console.log("********************************")
//(2)决定哪支球队平均获胜（平均分最高），并将胜者打印到控制台。在输出中也包括平均分
//用条件控制语句，判断两队平均分最高
if ((JohnAvg > MikeAvg)){
    console.log("John是获胜的队伍!" + "John平均分为:" + JohnAvg);
}
else if ((MikeAvg > JohnAvg)){
    console.log("Mike是获胜的队伍!" + "Mike平均分为:" +MikeAvg);
}
else{
    console.log("平局");
}
console.log("********************************")
//(3)改变分数来显示不同的赢家。别忘了考虑到可能会有平局（平均分相同）；
let JohnAvg1 = (89,120,103)/3;
let MikeAvg1 = (116,94,123)/3;
console.log("John的平均分："+JohnAvg1);
console.log("Mike的平均分："+MikeAvg1);
if ((JohnAvg1 > MikeAvg1)){
    console.log("John是获胜的队伍!" + "John平均分为:" + JohnAvg1);
}
else if ((MikeAvg1 > JohnAvg1)){
    console.log("Mike是获胜的队伍!" + "Mike平均分为:" +MikeAvg1);
}
else{
    console.log("平局");
}
console.log("********************************")
//(4)Mary 也打篮球，她的队得了97分、134分和105分。像前面一样，把平均分胜出者记录到控制台
let MaryAvg = (97,134,105)/3;
console.log("Mary的平均分："+MaryAvg);
console.log("********************************")
//(5)像前面一样，改变分数以产生不同的赢家，记住可能会有平局。
if ((JohnAvg > MikeAvg) && (JohnAvg > MaryAvg)){
    console.log("John是获胜的队伍!" + "John平均分为:" + JohnAvg);
}
else if ((MikeAvg > JohnAvg) && (MikeAvg > MaryAvg)){
    console.log("Mike是获胜的队伍!" + "Mike平均分为:" +MikeAvg);
}
else if ((MaryAvg > JohnAvg) && (MaryAvg > MikeAvg)){
    console.log("Mary是获胜的队伍!" + "Mary平均分为:" +MaryAvg);
}
else{
    console.log("平局");
}
