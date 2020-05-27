# 每周总结可以写在这里  
1.编程通识知识  
## 按语法分类  
非形式语言    
  中文 英文    
形式语言    
  0型: 无限制文法    
  1型: 上下文相关文法    
  2型: 上下文无关文法    
  3型: 正则文法    

## 产生式 BNF
四则运算  
<PrimaryExpression> = <DecimalNumber> |  
"(" <LogicalExpression> ")"  

<MultiplicativeExpression> = <PrimaryExpression> |  
<MultiplicativeExpression> "*" <PrimaryExpression>|  
<MultiplicativeExpression> "/" <PrimaryExpression>  

<AdditiveExpression> = <MultiplicativeExpression> |  
<AdditiveExpression> "+" <MultiplicativeExpression>|  
<AdditiveExpression> "-" <MultiplicativeExpression>

## 图灵完备性
https://zh.wikipedia.org/wiki/%E5%9C%96%E9%9D%88%E5%AE%8C%E5%82%99%E6%80%A7  
命令式 -- 图灵机  
  goto  
  if while  
声明式 -- lambda  
  递归  

## 类型系统
按动静划分:		
	动态类型系统:
		在用户的设备\在线服务器上运行
		产品实际运行时
		Runtime
	静态类型系统:
		在程序员的设备上 
		产品开发时 
		Compiletime
按是否隐式转换划分：
	强类型
	弱类型
按复合类型划分:
	结构体
	函数签名
子类型:
	逆变
	协变
	
2.javaScript词法
## Atom
Unicode:
	https://www.fileformat.info/info/unicode/
码点：字符对应的值
字符也可以用中文，但是超出ASCII范围时，会涉及到本身文件编码的问题。中文用\u转义。
Unicode里面的space都是js里面的合法space。
## InputElement词法
js最佳实践限制在ASCII范围内，最多限制在BFP范围内。
WhiteSpace空白  
	制表符<tab>:
		可以在console下，“\t”输出“ ”。
		"\t".codePointAt(0)输出9，在Unicode的第9个位置，在ASCII范围内。
	纵向制表符<VT>
	FROM FEED<FF>
	* 普通空格<SP>:  一般情况下都使用这个。
	空格<NBSP>:
		java&nbsp;script=>看上去是被空格隔开了，但是如果屏幕缩小，空格左右不会单独换行，是一个整体。
LineTerminator换行符
	<LF>:\n,一般情况下都使用这个
	<CR>:\r
	Comment注释
	Token:js中一切有效的东西都叫token。Punctuator和Keywords帮助程序形成结构,
		Punctuator:符号
			例如: ;(
		Keywords:关键字
			例如: for let…  
			* undefined不是关键字，离开全局可以其值可改。
		Identifier:标识符
			变量名:不能和关键字重合
				例如:document \u5389 
			属性名:可以和关键字重合。词法扫描，先都认为是IdentifierName，下一步语法解析才解析为关键字还是标识符。
				write 
			Future reserved Keywords:enum  将来可能会用的
		Literal:直接量  
		例如: 1 100 自己写出来的有效信息
## 类型
Number 
十进制、二进制、八进制、十六进制、浮点型
	Math.abs(0.1+0.2-0.3) <= Number.EPSILON
	97 . toString(2)   97的二进制
String
“abc” ‘abc’ `abc`
	Unicode  UTF-8占两个字节   UTF-16占4个字节
	UCS:Unicode BFP
	GB国标:中文 + ASCII 
	BIG5:台湾繁体
“\x00” “\u0000”   \后只支持接 ‘ “ \ b f n r t v

  
  

