//可重复代码
        //1.定义 
        function reusableFunction() {
            console.log("Hi World");
        }
        //2.调用
        reusableFunction();
        //3.参数定义
        function reusable(num1,num2){
            console.log(num1 * num2);
        }
          reusable(1,2);
        //4.reture 返回值
            function plusThree(num) {
                return num + 3;
            }
            const answer = plusThree(5);
            console.log(answer);

            //5.使用reture 返回值赋值
            let plusfours = 0 ;
            function plusfour(num) {
                return num + 3;
            }
            plusfours = plusfour(20);
            console.log(plusfours);
