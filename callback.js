setTimeout(function(){
console.log("timer");
},5000)



function x(y){
  console.log("Love");
  y();
}

x(function y(){
  console.log("Life");
});