 //函数中的全局作用域和局部作用域,局部变量将会优先于全局变量。
 //1.全局作用域
 const app = "apps";
 console.log(app);
 //2.局部作用域
 function book() {
     const pen = "pens";
     console.log(pen);
 }
 book();
 console.log(pen);//无法打印
