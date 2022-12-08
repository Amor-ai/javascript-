//while 循环
//将0-5(包括0and5)放入数组中
const myArray = [];
let i = 0 ;
while (i>=0 && i<=5){
  myArray.unshift(i);
  i++;
}
console.log(myArray)
