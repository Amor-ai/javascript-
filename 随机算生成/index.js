//随机整数
/*用 Math.random() 生成一个随机小数。
把这个随机小数乘以 20。
用 Math.floor() 向下取整，获得它最近的整数*/
Math.floor(Math.random() * 20);

Math.random() //生成0-1中间的随机数

Math.floor(Math.random() * (max - min + 1)) + min//生成某个范围内的随机整数

parseInt() //函数解析一个字符串返回一个整数

parseInt() //函数解析一个字符串并返回一个整数。 它还可以传入第二个参数，指定了字符串中数字的基数。 基数可以是 2 到 36 之间的整数
parseInt(string, radix);  const a = parseInt("11", 2); //变量 radix 表示 11 是在二进制系统中。 这个示例将字符串 11 转换为整数 3。

