
const radius= [3,4,5,2];
const calculateArea=function(radius){
    const output=[];
    for(let i=0; i<radius.length;i++){
        output.push(Math.PI*radius[i]*radius[i]);
    }
    return output;
}
console.log(calculateArea(radius));

const circumference=function(radius){
    const output=[];
    for(let i=0; i<radius.length;i++){
        output.push(2*Math.PI*radius[i]);
    }
    return output;
}
console.log(circumference(radius));


//modified way(best)
const area=function(radius){
    return Math.PI*radius*radius;
}

const cf=function(radius){
    return 2*Math.PI*radius;
}

const calculate=function test(radius,logic){
    const empty=[];
    for(let i=0;i<radius.length ; i++){
        empty.push(logic(radius[i]));
    }
    return empty;
}
console.log(calculate(radius,area));
console.log(calculate(radius,cf));
