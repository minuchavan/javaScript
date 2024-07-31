//function statement or function declaration
a();
function a(){
    console.log("a is a");
}
a();

//output : a is a     a is a 
//we can call before function also


//function expression
//b();//give error bec we can not call like this
var b=function(){
    console.log("b is b");
}
b();

//anonymous functon
//function(){
  //  console.log("anonymous");
//}

//named function expression
var c=function xyz(){
    console.log("named function");
}
c();
//0xyz(); error 

//first class function

var m= function(param1){
    return function xyz(){

    }
}
console.log(m());