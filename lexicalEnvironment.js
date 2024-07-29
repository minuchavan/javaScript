
/*
function a(){
    console.log(b);
}
var b=111;
a();

output=111



function a(){
    c();
    function c(){
        console.log(b);
    }

}
var b=89;
a();


output=89


function a(){
    var b=1289;
    c();
    function c(){
        console.log(b);
    }

}

a();

output=1289
*/

function a(){
    var b=1289;
    c();
    function c(){
        console.log(b);
    }

}
console.log(b);  //error given line because we can't accesse b outside the function
a();
