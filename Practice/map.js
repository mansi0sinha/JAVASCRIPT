function myMap(arr,callback){
    let result=[];
    for(let i=0;i<arr.length;i++){
        result[i]=callback(arr[i]);
    }
    return result;
}
let arr=[1,2,3,4,5];
let mapValue=myMap(arr,callback=(arr)=>arr*2);
console.log(arr);
a=console.log(mapValue);