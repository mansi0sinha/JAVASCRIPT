function filter(arr,callback){
    let result=[];
    for(let i=0;i<arr.length;i++){
      if(callback(arr[i])){
        result.push(arr[i]);
      }
    }
    return result;
}

let arr=[1,2,3,4,5,6];
let result=filter(arr,(num)=> num%2===0);
console.log(result);