## convertStringToNumber
```
function convertStringToNumber(string, x) {
    if (arguments.length){
        x = 10;
    }
    var flag = /e|E/.test(string);
    if(!flag){
        var chars = string.split('');
        var number = 0;
        var i = 0;
        while (i < chars.length && chars[i] != '.') {
            number = number * x;
            number += chars[i].codePointAt(0) - '0'.codePointAt(0);
            i++;
        }
            if(chars[i] == '.'){
            i++;
        }
        var fraction = 1;
        while(i < chars.length){
            fraction = fraction / x;
            number += (chars[i].codePointAt(0) - '0'.codePointAt(0)) * fraction;
            i++;
        }
        return number;
    }else{
        var exponent = Number(string.match(/\d+$/)[0]);
        var number = string.match(/^[\d\.]+/)[0].replace(/\./, '');
        if(/e-|E-/.test(string)){
            return Number(number.padStart(exponent + 1, 0));
        }else{
            return Number(number.padEnd(exponent + number.length, 0).replace(/^0/, '0.'));
        }
    }
}
```
## convertNumberToString
```
function convertNumberToString(number, x) {
    var integer = Math.floor(number);
    var fraction = String(number).match(/\.\d+$/);
    if(fraction){
        fraction = fraction[0].replace('.', '');
    }
    var string = '';
    while(integer > 0){
        string = String(integer % x) + string;
        integer = Math.floor(integer / x);
    }
    return fraction ? `${string}.${fraction}` : string;
}
```
## 找出 JavaScript 标准里有哪些对象是我们无法实现出来的，都有哪些特性？写一篇文章，放在学习总结里。
```
Array：Array 的 length 属性根据最大的下标自动发生变化。
Object.prototype：作为所有正常对象的默认原型，不能再给它设置原型了。
String：为了支持下标运算，String 的正整数属性访问会去字符串里查找。
Arguments：arguments 的非负整数型下标属性跟对应的变量联动。
模块的 namespace 对象：特殊的地方非常多，跟一般对象完全不一样，尽量只用于 import 吧。
类型数组和数组缓冲区：跟内存块相关联，下标运算比较特殊。
bind 后的 function：跟原来的函数相关联。
```
