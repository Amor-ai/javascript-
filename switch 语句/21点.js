let count = 0;
let num = 0;
function cc(card) {
  // 只修改这一行下面的代码
 switch(card){
   case 2:
   case 3:
   case 4:
   case 5:
   case 6:
   count++;
   break;
   case 10:
   case "J":
   case "Q":
   case "K":
   case "A":
   count--;
   break; 
 }
 if(count>0){
   num = "Bet"
 }
 else{
   num = "Hold"
 }
  return count + " " + num;
  // 只修改这一行上面的代码
}
console.log(cc("k"));
