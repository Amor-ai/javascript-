//var会覆盖变量 相同变量可以被多次定义 
var a = "b";
console.log(a);


var a = "d";
console.log(a);

//let 不会覆盖变量 变量只能定义一次 定义的值可以重新赋值
let b = 2;
console.log(b);
//let b = 3; //变量重复会报错
let c = 3;
b = c ;
console.log(b);//定义的值可以重新赋值

//const 不会覆盖变量 变量只能定义一次 定义的值不可以重新赋值  用大写字母作为常量标识符
const d = 2;
console.log(d);
//const d = 3; //变量重复会报错
/*let a = 3;
d = a ;
console.log(d);//定义的值不可以重新赋值 会报错*/
