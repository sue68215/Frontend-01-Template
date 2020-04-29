# 每周总结写这里
## Expression表达式
    # Grammar //理解运算符的优先级，利用表达式生成树实现
        * Left HandSide
            优先级：1 > 2 >3
            1.MemberExpression(P201): 访问属性，a.b中b是a的Number
            * 返回的都是reference类型，包括object和key,只有delete和assign时有引用特点
                a.b  //访问对象的成员，a必须是对象，b是string或symbol
                a[b] //访问对象的成员，b可以是变量
                super.b  //super调用父类的方法或者属性 只能在构造函数里用
                super['b'] 
                /*
                class parent{
                    constructor(){
                        this.a = 1;
                    }
                } 
                class child extends parent{
                    constructor(){
                        super();
                        console.log(super.a);
                    }
                }
                new child  //调用前，要先调用父类的构造器,即调用super()
                */
                new.target  //不能改变这种写的方式，只能在构造函数里用，知识点不重要
                new Foo()
                /*
                function cls1(s){
                    console.log(s);
                }
                function cls2(s){
                    console.log("2",s);
                    return cls1;
                }
                new new cls2("good");  //输出2 good  cls1 {}
                */
                foo`string`  //跟Number无关，只是优先级相同
                /*  输出 "dear lin!"
                var name = "lin";
                `dear ${name}!`
                */
                /* arguments[2] = [dear,!][lin]
                function foo(){
                    console.log(arguments)
                }
                foo `dear ${name}!`
                */
            2.New
                new Foo 
            3.Call             new a()['b']=>(new a())['b']
                foo()
                super()
                foo()['b']=>先foo(),再['b']
                foo().b
                foo()`abc`
        * Right HandSide
        1.Update
            a ++  //a必须是Number类型
            ++ a
            a --
            -- a
        2.Unary
            delete a.b  //a.b必须是reference类型
            void foo()   //void是运算符，void后面接任何都返回undefined;常用void 0;
            /*  //ife立即执行的函数表达式
            for(var i = 0; i < 10; i++){
                var button  = document.createElement("button");
                document.body.appendChild(button);
                button.innerHTML = i;
                /* 用void的好处，上文没有；结束也不影响
                void function(i){
                    button.onClick = function(){
                        console.log(i);
                    }
                }(i)
                */
                 /* 多个的时候少写；可能会出问题
                (function(i){
                    button.onClick = function(){
                        console.log(i);
                    }
                })(i)
                */
            }
            */
            typeof a  //a可以是任何类型
            /*
            typeof null =>object
            typeof function(){} =>Function
            */
            + a  //a必须是Number类型
            - a
            ~ a  //a必须是整数Number类型
            ! a  //!!1 =>true 结果是同true/false
            await a
        3.Logical 逻辑运算
        || && 不转换 
    * 装箱  Number String Symbol Boolean
        typeof "hello" =>"string"
        typeof new String("hello") =>"object"  //带new时类型时object
        String(1) => "1"  //String Number Boolean可以强制类型转换
        Number("1") = >1
        Boolean("1") =>true
        new String("1") =>String {"1"}
        new Number(1) =>Number {1}
        new Boolean("1") =>Boolean {true}  
    * 拆箱

# Grammar语句
## 简单语句   //前三个语句产生normal  后四个语句产生非normal
    ExpressionStatement  //a = 1 + 2;
    EmptyStatement       //;
    DebuggerStatement    //debugger;
    ThrowStatement       //throw a; 
    ContinueStatement    //continue label1; label1是合法的标识符
    BreakStatement       //break label2;
    ReturnStatement      //return 1 + 2;
## 组合语句
    1.BlockStatement       //[[type]]:normal
        /*
            {
                const a = 1;
                throw 1;     //执行语句出现非normal结果，则停止不往下执行  throw return break continue
                let b = 2;
                b = foo();
            }
        */   
    2.Iteration  //3是var let/const  1是表达式  2是语句
        while( 1 ) 2       //子语句出现break则后面不执行了，如果出现continue则继续执行while结果 
        do 2 while( 1 )
        for( 3; 1; 1) 2
        /*
            for(let i = 0; i < 10; i++){   //{}一个作用域，for是一个作用域
                let i = 0;
                console.log(i);
            }
            {
                let i = 0;   //相当于for的作用域
                {   //{}的作用域
                    let i = 1;
                    console.log(i);
                }
                console.log(i);
            }
        */
        for( 3 in 1) 2    //循环对象的属性，结果是属性的key     1中不允许出现带in的表达式
        /*  
            for(let p in {a:1,b:2}){
                console.log(p);    
            }
        */
        for( 3 of 1) 2       //循环数组
        /*
            for(let p of [1,2,3]){
                console.log(p);
            }
        */ 
        只有循环语句和switch能够消费带label的continue和break
        break continue后跟label，即可以找到break或continue到哪一层

        # 作用域：在程序员的电脑上，源代码的范围
        # 执行上下文：在用户电脑上，javascript引擎的内存
        
    3.try
        try{
            throw 2;
        }catch(e){
            
        }finally{

        }
    4.声明
        FunctionDeclaration
          /*  
            //函数声明
            function foo(){

            }
            //函数表达式
            var o = function foo(){

            }
          */  
        GeneratorDeclaration  //可以返回多个值的函数
            /*
                function* foo(){
                    yield 1;
                    yield 2;
                    var i = 3;
                    while(true){
                        yield 3;
                        i++;
                    }
                }   
                var o = function* foo(){

                }         
            */
            /*
                var gen = foo();
                gen.next();  //{value:1, done:false}
                gen.next();  //{value:2, done:false}   
                ...           
            */
        AsyncFuncitonDeclaration
        /*
            function sleep(d){
                return new Promise(resolve => setTimeout(resolve, d));
            }
            async function* foo(){
                var i = 0;
                while(true){
                    yield i++;
                    await sleep(1000);
                }
            }();
            void async function(){
                var g = foo();
                for await(let e of g){
                    console.log(e);
                }
            }
        */
        AsyncGeneratorDeclaration
        /*
            function sleep(d){
                return new Promise(resolve => setTimeout(resolve, d));
            }
            void async function(){
                var i = 0;
                while(true){
                    console.log(i++);
                    await sleep(1000);
                }
            }();
        */
        VariableStatement
        * 声明var变量一定写在function里的最前面，至少要写在变量第一次出现的地方，不要在block里去写
        /*
            function foo(){
                var o ={x : 1};
                o.x = 3;
                var x = 2;
            }        
        */
        /*  //结果是2 undefined
            function foo(){
                foo2();
                console.log(i);
                return;
                var i = 1;   //只有var i生效
                function foo2(){      //foo2的整个内容都生效
                    console.log(2);
                }
            }
        */
        ClassDeclaration
            /*
                class foo{

                }
                var o = class foo{}  => var o = class {}  //匿名
            */
            /*
                var cls1 = 0;
                function foo(){
                    class cls1{    //使用之前必须声明

                    };
                    class cls1{    //不可重复使用

                    };
                }
            */
        LexicalDeclaration
        /*  执行和预处理是两个流程
            var cls1 = 0;
            function foo(){
                console.log(cls1);
                let/const cls1;    //let const class 不支持提升
            }
        */
## Runtime运行时
```
  Completion Record
    [[type]]:normal throw return break continue
    [[value]]:Types   //return和throw时使用
    [[target]:label   //break和continue时使用
  Lexical Enviorment
```
## Object  世间万物   三要素：唯一性 状态 行为
    # 架构层面的合理性：
        封装、解耦：不同模块的关联性比较弱、复用、内聚
    # 继承：面向对象的子系统
    # 多态：动态性程度，同样的代码，行为不通

   
    1.Object——Class
    2.Object——Prototype
        在设计对象的状态和行为时，遵循“行为改变状态”的原则
        /* 狗咬人    行为：状态的改变
            class Dog{
                bite(human){   //错误
                    //...
                }
            }
            class Human{        //正确的
                hurt(damage){
                    //...
                }
            }
        */
    3.Object in JavaScript
        Object = > Property ... [[Prototype]]    //可以有原型和多个属性
    4.Object API/Grammer
    {} . [] Object.defineProperty
    Object.create Object.setPrototypeOf Object.getPrototypeOf
    new class extends