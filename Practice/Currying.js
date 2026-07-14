// function subtract(a){
//     return function(b){
//         return a-b;
//     };
// };
// console.log(subtract(10)(7));
// function greet(a){
//     return function(b){
//         return a+" "+b;
//     }
// }
// console.log(greet("Hello")("Mansi"));
function multiply(A){
    return function(B){
        return A*B;
    }
}
console.log(multiply(10)(7));