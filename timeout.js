/*
function x(){

    var i=1;
    setTimeout(function(){
        console.log(i);
    },3000);
}
x();
output: 1 after 3 sec



function x(){

    var i=1;
    setTimeout(function(){
        console.log(i);
    },3000);
    console.log("Timeout before");
}
x();

output:
Timeout before
1


function x(){
    var i=1;
    for(i=1;i<=5;i++){
        setTimeout(function(){
            console.log(i);
        },3000);
    }
}
x();

output=
6
6
6
6
6


function x(){
    //let i=1;
    for(let i=1;i<=5;i++){
        setTimeout(function(){
            console.log(i);
        },3000);
    }
}
x();

output=
1
2
3
4
5




function x(){
    
    for(let i=1;i<=5;i++){
        setTimeout(function(){
            console.log(i);
        },i*3000);
    }
}
x();

*/

function x(){
    
    for(var i=1;i<=5;i++){
        function close(i){

            setTimeout(function(){
                console.log(i);
            },i*3000);
        }
        close(i);
       
    }
}
x();


function cb(){
    console.log("MINU ");
}
setTimeout(cb,5000);