
//可以代替复杂的if else 语句
function caseInSwitch(val) {
    let answer = "";
  switch (val){
    case  1:
    answer = "alpha";
    break;
    case  2:
    answer = "beta";
    break;
    case  3:
    case  6: //多条件
   answer = "gamma";;
    break;
    case  4:
   answer = "delta";
    break;
    default://没有选项时 默认输出
        answer = "stuff";
        break;
   }
    return answer;
  }
  console.log(caseInSwitch(6));
