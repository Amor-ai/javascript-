//对对象上使用方括号表示法，还可以访问对象上作为变量值存储的属性。 
//当你需要遍历对象的所有属性，或者根据一个变量的值查找对应的属性值时，这种写法尤其适用。
const dogs = {
    Fido: "Mutt",
    Hunter: "Doberman",
    Snoopie: "Beagle",
    bark : "woof"
  };
  
  const myDog = "Hunter"; //定义一个参数等于变量值
  const myBreed = dogs[myDog]; //根据变量值寻找属性值
  console.log(myBreed);
  //字符串 Doberman 将会出现在控制台中

//给javascript对象添加一个新属性
dogs.bark = "woof";
dogs["bark"] = "woof";

//删除对象的属性
delete dogs.bark;
