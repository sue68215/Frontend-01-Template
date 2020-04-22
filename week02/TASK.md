1.写一个正则表达式 匹配所有 Number 直接量

/^-?\d*[\.bBxXo]?[0-9a-fA-F]+$/g

//整数
var reg = /^-?\d+$/g

//浮点数
var reg = /^-?\d*\.\d*$/g

//二进制
var reg = /^0[bB][01]+$/g

//八进制
var reg = /^0(o?|0+)[0-7]+$/g

//十六进制
var reg = /^0[xX][0-9a-fA-F]+$/g

2.写一个 UTF-8 Encoding 的函数

function utf8Encoding(str) {
  	let result = '';
  	for(let s of str) {
      result += `\\u${s.charCodeAt().toString(16)}`
    }
    return result;
}

utf8Encoding('重学前端');

3.写一个正则表达式，匹配所有的字符串直接量，单引号和双引号
/^[\s\S]*[0-9a-zA-Z\u4e00-\u9fa5]*$/g
