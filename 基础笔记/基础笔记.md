# JavaScript 提供八种不同的数据类型，它们是 undefined（未定义）、null（空）、boolean（布尔型）、string（字符串）、symbol、number（数字）、bigint（可以表示任意大的整数）和 object（对象）

# 我们也可以把小数存储到变量中。 小数有时候也被称作浮点数或者 floats。

# 余数运算符 % （remainder）有时被错误地称为“模数”运算符。 它与模数非常相似，但不能用于负数的运算。

# 定义一个字符串必须要用单引号或双引号来包裹它。 那么当你的字符串里面包含引号 " 或者 ' 时该怎么办呢? 在 JavaScript 中，可以通过在引号前面使用反斜杠（\）来转义引号。

例如 const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; 输出为 myStr = "I am a "double quoted" string inside "double quotes"."

或者 const myStr = 'I am a "double quoted" string inside "double quotes'. 输出为 myStr = "I am a "double quoted" string inside "double quotes"." 

# \'单引号    \"双引号   \\	反斜杠   \n	换行符   \t	制表符   \r	回车  \b退格    \f换页符

# 数组 const x = [];  数组嵌套 const x = [[],[]]  
 
# .pop() 用来弹出一个数组末尾的值。 .shift() 用来弹出一个数组首位的值
# .push() 在数组的尾部添加元素  unshift() 在数组的头部添加元素。

# typeof 
typeof 3 返回字符串 number，typeof '3' 返回字符串 string。

# 逻辑与运算符 && 逻辑或运算符 ||  if（条件）{条件为真执行} else{条件为假执行}

# 当代码执行到 return 语句时，函数返回一个结果就结束运行了，return 后面的语句不会执行

# 访问对象属性 . or []
 如果你想访问的属性名中包含空格，就必须使用方括号表示法来获取它的属性值。
