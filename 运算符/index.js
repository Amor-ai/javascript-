//相等运算符 会做类型转换 例如 1=“1” 返回true  ===严格运算符 不会做类型转换 
let flaot = "flaot"
function testEqual(val) {
  if (val==12) {
    return "Equal";
  }
  return "Not Equal";
}
flaot = testEqual(10);
console.log(flaot)
//其他运算符同理
    
