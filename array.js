const arr = [5,1,3,2,6];
//sum or max
function findsum(arr){
    let sum=0;
    for(let i=0; i<arr.length ; i++){
        sum=sum+arr[i];
    }
    return sum;
}
console.log(findsum(arr));

function findmax(arr){
    let max=0;
    for(let i=0; i<arr.length ; i++){
        if(arr[i]>max)
        max=arr[i];
    }
    return max;
}
console.log(findmax(arr));