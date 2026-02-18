const prompt = require("prompt-sync")();
const n = prompt("Enter number: ");
if(n % 5 == 0){
    console.log("number is divisible by 5");
}else{
    console.log("number is not divisible by 5");
}