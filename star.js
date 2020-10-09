var alt = "";
for(var i=1;i<=4;i++){
    var blank = "";
    var stars = "";
    //打印空格
    for(var j=1;j<=4-i;j++){
        blank = blank + " ";
    }
    //打印*
    for(var m=1;m<=i;m++){
        stars = stars + "*" + " ";
    }
    //字符串的拼接，并且拼接为一行
    alt = alt + blank + stars + "\n";

}
//打印的行数要减1
for(var i=4-1;i>0;i--){
    var blank = "";
    stars = "";
    //打印空格
    for(var j=1;j<=4-i;j++){
        blank = blank + " ";
    }
    //打印*
    for(var m=1;m<=i;m++){
        stars = stars + "*" + " ";
    }
    //字符串的拼接，并且拼接为一行
    alt = alt +  blank + stars + "\n";
}
console.log(alt);