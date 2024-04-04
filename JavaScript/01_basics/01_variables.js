/*
let - we can reassign value in it but can't redeclare and it is a block space variable.
const - we declare const when we know that putting value is not gonna be change.
we should not use var as it is a global variable and it can create some issues by mistake when developer redifine it with same name in any scope of file.
*/

//block scop means we can't access variable outside of any block {}. but it depends on where are we declaring variable.
//if we are declaring variable outside the block then we can access that variable outside the block as well as inside any block but if we are delcaring that variable inside the block then we can access that variable only inside the block, we can't access that varibale outside the block.
//example: 
/*
let n = 10;
let sum = 0;
for(let i=1;i<=n;i++){
    sum += i; 
}
console.log(sum);
*/
//output will come without any error but if we will declare sum variable inside the for block then we will not be able to access outside the block in console.log(sum).
