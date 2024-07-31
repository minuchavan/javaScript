const arr=[2,3,5,7,9,12];
//map
function double(x){
    return x*2;
}
function triple(x){
    return x*3;
}
function binary(x){
    return x.toString(2);
}

const output=arr.map(double);
const output1=arr.map(triple);
const output2=arr.map(binary);
console.log(output);
console.log(output1);
console.log(output2);

//filter

function isEven(x){
    return x%2===0;
}
const test=arr.filter(isEven);
console.log(test);

//sum or max using reduce

const out=arr.reduce(function(acc,curr){
    acc=acc+curr;
    return acc;
},0);
console.log(out);


const out1=arr.reduce(function(max,curr){
    if(curr>max){
        max=curr;
    }
    return max;
},0);
console.log(out1);

const users=[
    { firstname: "Minal", lastName:"Chavan",age: 24},
    { firstname: "Tushar", lastName:"Bagul",age: 25},
    { firstname: "Abhi", lastName:"Singh",age: 30},
    { firstname: "ladoo", lastName:"Singh",age: 30},
];

const result=users.map((x)=> x.firstname +" "+x.lastName);
console.log(result);

//output:[ 'Minal Chavan', 'Tushar Bagul', 'Abhi Singh' ]

const res=users.reduce(function(acc,curr){
    if(acc[curr.age]){
        acc[curr.age]=++acc[curr.age];
    }
    else{
        acc[curr.age]=1;
    }
    return acc;
},{})
console.log(res);