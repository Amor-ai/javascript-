
//for 循环 for 循环中的可选三个表达式用分号隔开  for (a; b; c)，其中a为初始化语句，b为条件语句，c 是最终的表达式。
// 设置
const myArra = [];
for (let i = 1;i>=1 && i<=5;i++){
  myArra.push(i);
}
console.log(myArra)
// 只修改这一行下面的代码

//使用 For 循环遍历数组的奇数
// 设置
const myArray = [];
for(let i =1 ;i < 10 ; i += 2){
   myArray.unshift(i);
}
console.log(myArray)
// 只修改这一行下面的代码

//使用 For 循环遍历数组
const myArr = [2, 3, 4, 5, 6];
let total = 0;
for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];//  myArr[0]=2 myArr[1]=3 ........
}

function multiplyAll(arr) {
  let product = 1;
  // 只修改这一行下面的代码
     for (let i = 0; i<arr.length;i++){
       for(let j =0 ; j<arr[i].length;j++){
         product = product * arr[i][j];//arr[i][j] 第一个数组中的第一位数
       }
     }
  // 只修改这一行上面的代码
  return product;
}
console.log(multiplyAll([[1], [3], [5]]));
