/*
function x(){
    var a=7;
    function y(){
        console.log(a);
    }
    y();
}
x();

//output=7
//child can access parents variable



function x(){
    var a=7;
    function y(){
        console.log(a );
    }
    //a=100;  a is change from 7 to 100
    return y;
}
var z=x();
console.log(z);  
z();

*/

function z(){
    var a="Tushar";
    function y(){
        var b="Minal";
        function m(){
            console.log(a,b);
        }
        m();
    }
    y();
}
z();